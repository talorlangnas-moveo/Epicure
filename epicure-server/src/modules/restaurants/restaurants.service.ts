import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './schemas/restaurant.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Body } from '@nestjs/common';

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
}
