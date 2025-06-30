import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './schemas/restaurant.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Body } from '@nestjs/common';
import * as moment from 'moment';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Dish } from '../dishes/schemas/dish.schema';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>,
    @InjectModel(Dish.name)
    private dishModel: mongoose.Model<Dish>,
  ) {}

  uploadImage(file: Express.Multer.File): string {
    if (!file) {
      throw new Error('No file uploaded');
    }

    return `./public/uploads/restaurants/${file.filename}`;
  }

  async create(
    @Body() createRestaurantDto: CreateRestaurantDto,
    file?: Express.Multer.File,
  ): Promise<Restaurant> {
    if (file) {
      const imagePath = this.uploadImage(file);
      createRestaurantDto.imgUrl = imagePath;
    }
    const restaurant = await this.restaurantModel.create(createRestaurantDto);
    return restaurant;
  }

  async findAll(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantModel.find();
    return restaurants;
  }

  async findOne(id: string | Types.ObjectId): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    return restaurant;
  }

  async update(
    id: Types.ObjectId,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const updatedRestaurant = await this.restaurantModel.findByIdAndUpdate(
      id,
      updateRestaurantDto,
      { new: true },
    );
    if (!updatedRestaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    return updatedRestaurant;
  }

  async remove(id: Types.ObjectId): Promise<Restaurant> {
    console.log('Removing restaurant with ID:', id);
    const deletedRestaurant = await this.restaurantModel.findByIdAndDelete(id);
    if (!deletedRestaurant) {
      throw new NotFoundException('Restaurant not found');
    }

    await this.dishModel.updateMany(
      {
        restaurantId: { $in: [id, id.toString()] },
      },
      { $unset: { restaurantId: '' } },
    );
    return deletedRestaurant;
  }

  async getTop3NewestRestaurants(): Promise<Restaurant[]> {
    return this.restaurantModel
      .find()
      .sort({ foundedDate: -1 })
      .limit(3)
      .exec();
  }

  async getTop3MostPopularRestaurants(): Promise<Restaurant[]> {
    return this.restaurantModel.find().sort({ rating: -1 }).limit(3).exec();
  }

  async getOpenRestaurantsNow(): Promise<Restaurant[]> {
    const now = moment();
    const currentTime = now.format('HH:mm');

    const result = await this.restaurantModel
      .aggregate<Restaurant>([
        {
          $addFields: {
            currentTime: currentTime,
            isOvernight: { $lt: ['$closingTime', '$openingTime'] },
          },
        },
        {
          $match: {
            $or: [
              // Case 1: Normal hours (closing time after opening time)
              {
                isOvernight: false,
                openingTime: { $lte: currentTime },
                closingTime: { $gt: currentTime },
              },
              // Case 2: Overnight hours (closing time before opening time)
              {
                isOvernight: true,
                $or: [
                  { openingTime: { $lte: currentTime } },
                  { closingTime: { $gt: currentTime } },
                ],
              },
            ],
          },
        },
        {
          $project: {
            isOvernight: 0,
            currentTime: 0,
          },
        },
      ])
      .exec();

    return result;
  }
}
