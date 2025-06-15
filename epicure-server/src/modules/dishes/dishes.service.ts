import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './schemas/dish.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class DishesService {
  constructor(
    @InjectModel(Dish.name)
    private dishModel: mongoose.Model<Dish>,
  ) {}

  async create(createDishDto: CreateDishDto): Promise<Dish> {
    const dish = await this.dishModel.create(createDishDto);
    return dish;
  }

  findAll() {
    return `This action returns all dishes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dish`;
  }

  update(id: number, updateDishDto: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
