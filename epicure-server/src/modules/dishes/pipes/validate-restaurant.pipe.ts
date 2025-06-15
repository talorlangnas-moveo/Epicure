import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Restaurant } from '../../restaurants/schemas/restaurant.schema';
import { CreateDishDto } from '../dto/create-dish.dto';

@Injectable()
export class ValidateRestaurantPipe implements PipeTransform<CreateDishDto> {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  async transform(value: CreateDishDto) {
    if (!value.restaurantId || !Types.ObjectId.isValid(value.restaurantId)) {
      throw new NotFoundException('Invalid restaurant ID');
    }

    const restaurantExists = await this.restaurantModel.findById(
      value.restaurantId,
    );

    if (!restaurantExists) {
      throw new NotFoundException(
        `Restaurant with ID ${value.restaurantId} not found`,
      );
    }

    return value;
  }
}
