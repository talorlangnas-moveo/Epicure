import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Restaurant } from '../../restaurants/schemas/restaurant.schema';
import { CreateDishDto } from '../dto/create-dish.dto';
import { UpdateDishDto } from '../dto/update-dish.dto';

@Injectable()
export class ValidateRestaurantPipe implements PipeTransform<CreateDishDto> {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  async transform(value: CreateDishDto | UpdateDishDto) {
    if ('restaurant' in value && value.restaurant) {
      if (!Types.ObjectId.isValid(value.restaurant)) {
        throw new NotFoundException('Invalid restaurant ID');
      }

      const restaurantExists = await this.restaurantModel.findById(
        value.restaurant,
      );

      if (!restaurantExists) {
        throw new NotFoundException(
          'That restaurant doesn’t exist. Try choosing another.',
        );
      }
    }
    return value;
  }
}
