import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChefDto } from './dto/create-chef.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Chef } from './schemas/chef.schema';

@Injectable()
export class ChefsService {
  constructor(
    @InjectModel(Chef.name)
    private chefModel: mongoose.Model<Chef>,
  ) {}

  async create(createChefDto: CreateChefDto): Promise<Chef> {
    const chef = await this.chefModel.create(createChefDto);
    return chef;
  }

  async findAll(): Promise<Chef[]> {
    const chefs = await this.chefModel.find();
    return chefs;
  }

  async findById(id: Types.ObjectId): Promise<Chef> {
    const chef = await this.chefModel.findById(id);
    if (!chef) {
      throw new NotFoundException('Chef not found');
    }
    return chef;
  }
}
