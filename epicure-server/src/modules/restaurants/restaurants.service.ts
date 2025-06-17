import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './schemas/restaurant.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Body } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  async create(
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.create(createRestaurantDto);
    return restaurant;
  }

  async findAll(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantModel.find();
    return restaurants;
  }

  async findById(id: string | Types.ObjectId): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    return restaurant;
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

    const allRestaurants = await this.restaurantModel.find().exec();

    const openRestaurants = allRestaurants.filter((restaurant) => {
      const opening = moment(restaurant.openingTime, 'HH:mm');
      const closing = moment(restaurant.closingTime, 'HH:mm');

      if (closing.isBefore(opening)) {
        return now.isAfter(opening) || now.isBefore(closing);
      } else {
        return now.isBetween(opening, closing);
      }
    });

    return openRestaurants;
  }
}
