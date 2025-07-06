import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Chef } from '../../chefs/schemas/chef.schema';

@Injectable()
export class ValidateChefParamPipe implements PipeTransform<string> {
  constructor(
    @InjectModel(Chef.name)
    private readonly chefModel: mongoose.Model<Chef>,
  ) {}

  async transform(value: string) {
    if (!value || !Types.ObjectId.isValid(value)) {
      throw new NotFoundException('Invalid chef ID');
    }

    const chefExists = await this.chefModel.findById(value);

    if (!chefExists) {
      throw new NotFoundException(`Chef with ID ${value} not found`);
    }

    return value;
  }
}
