import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { Dish } from './schemas/dish.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { UpdateDishDto } from './dto/update-dish.dto';

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

  async updateById(
    id: Types.ObjectId,
    updateDishDto: UpdateDishDto,
  ): Promise<Dish> {
    const updatedDish = await this.dishModel.findByIdAndUpdate(
      id,
      updateDishDto,
      { new: true },
    );
    if (!updatedDish) {
      throw new NotFoundException('Dish not found');
    }
    return updatedDish;
  }

  async removeById(id: Types.ObjectId): Promise<Dish> {
    const deletedDish = await this.dishModel.findByIdAndDelete(id);
    if (!deletedDish) {
      throw new NotFoundException('Dish not found');
    }
    return deletedDish;
  }
}
