import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Restaurant } from '../../restaurants/schemas/restaurant.schema';

@Injectable()
export class ValidateRestaurantParamPipe implements PipeTransform<string> {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  async transform(value: string) {
    if (!value || !Types.ObjectId.isValid(value)) {
      throw new NotFoundException('Invalid restaurant ID');
    }

    const restaurantExists = await this.restaurantModel.findById(value);

    if (!restaurantExists) {
      throw new NotFoundException(`Restaurant with ID ${value} not found`);
    }

    return value;
  }
}
