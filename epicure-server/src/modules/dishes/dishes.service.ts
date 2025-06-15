import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { Dish } from './schemas/dish.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';

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

  async findById(id: Types.ObjectId): Promise<Dish> {
    const dish = await this.dishModel.findById(id);
    if (!dish) {
      throw new NotFoundException(`Dish not found`);
    }
    return dish;
  }
}
