import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './schemas/restaurant.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Body } from '@nestjs/common';
import * as moment from 'moment';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Dish } from '../dishes/schemas/dish.schema';
import * as fs from 'fs';
import * as path from 'path';

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
    return `static/restaurants/${file.filename}`;
  }

  private deleteImageFile(imagePath: string) {
    try {
      const normalizedPath = imagePath
        .replace(/^\.\//, '')
        .replace(/^static\//, '');
      const absolutePath = path.join(process.cwd(), 'public', normalizedPath);

      console.log('Trying to delete file at:', absolutePath);

      if (fs.existsSync(absolutePath)) {
        fs.unlinkSync(absolutePath);
        console.log('Successfully deleted file');
      } else {
        console.log('File does not exist');
      }
    } catch (error) {
      console.error('Error deleting image file:', error);
    }
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
    file?: Express.Multer.File,
  ): Promise<Restaurant> {
    const currentRestaurant = await this.restaurantModel.findById(id);
    if (!currentRestaurant) {
      throw new NotFoundException('Restaurant not found');
    }

    if (file) {
      if (currentRestaurant.imgUrl) {
        this.deleteImageFile(currentRestaurant.imgUrl);
      }
      const imagePath = this.uploadImage(file);
      updateRestaurantDto.imgUrl = imagePath;
    }

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
    const restaurant = await this.restaurantModel.findById(id);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }

    if (restaurant.imgUrl) {
      this.deleteImageFile(restaurant.imgUrl);
    }

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
