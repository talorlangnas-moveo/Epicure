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

  async findAll(): Promise<Dish[]> {
    const dishes = await this.dishModel.find();
    return dishes;
  }

  async findByRestaurantId(restaurantId: string): Promise<Dish[]> {
    const dishes = await this.dishModel.find({ restaurantId });
    return dishes;
  }

  update(id: number, updateDishDto: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
