import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChefDto } from './dto/create-chef.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Chef } from './schemas/chef.schema';
import { UpdateChefDto } from './dto/update-chef.dto';
import { Restaurant } from '../restaurants/schemas/restaurant.schema';

@Injectable()
export class ChefsService {
  constructor(
    @InjectModel(Chef.name)
    private chefModel: mongoose.Model<Chef>,
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  async create(createChefDto: CreateChefDto): Promise<Chef> {
    const chef = await this.chefModel.create(createChefDto);
    return chef;
  }

  async findAll(): Promise<Chef[]> {
    const chefs = await this.chefModel.find();
    return chefs;
  }

  async findOne(id: Types.ObjectId): Promise<Chef> {
    const chef = await this.chefModel.findById(id);
    if (!chef) {
      throw new NotFoundException('Chef not found');
    }
    return chef;
  }

  async update(
    id: Types.ObjectId,
    updateChefDto: UpdateChefDto,
  ): Promise<Chef> {
    const updatedChef = await this.chefModel.findByIdAndUpdate(
      id,
      updateChefDto,
      { new: true },
    );
    if (!updatedChef) {
      throw new NotFoundException('Chef not found');
    }
    return updatedChef;
  }

  async remove(id: Types.ObjectId): Promise<Chef> {
    // First, check if the chef exists and delete them
    const deletedChef = await this.chefModel.findByIdAndDelete(id);
    if (!deletedChef) {
      throw new NotFoundException('Chef not found');
    }

    await this.restaurantModel.updateMany(
      {
        chefId: id.toString(),
      },
      { $unset: { chefId: 1 } },
    );

    return deletedChef;
  }

  async getTop3NewestChefs(): Promise<Chef[]> {
    return this.chefModel.find().sort({ foundedDate: -1 }).limit(3).exec();
  }

  async getTop3MostPopularChefs(): Promise<Chef[]> {
    return this.chefModel.find().sort({ numberOfViews: -1 }).limit(3).exec();
  }
}
