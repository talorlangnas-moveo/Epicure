import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Chef } from '../../chefs/schemas/chef.schema';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';

@Injectable()
export class ValidateChefPipe
  implements PipeTransform<CreateRestaurantDto | UpdateRestaurantDto>
{
  constructor(
    @InjectModel(Chef.name)
    private readonly chefModel: mongoose.Model<Chef>,
  ) {}

  async transform(value: CreateRestaurantDto | UpdateRestaurantDto) {
    if ('chefId' in value && value.chefId) {
      if (!Types.ObjectId.isValid(value.chefId)) {
        throw new NotFoundException('Invalid chef ID');
      }

      const chefExists = await this.chefModel.findById(value.chefId);

      if (!chefExists) {
        throw new NotFoundException(
          'That chef doesn’t exist. Try choosing another.',
        );
      }
    }
    return value;
  }
}
