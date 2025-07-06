import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateChefDto } from './dto/create-chef.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Chef } from './schemas/chef.schema';
import { UpdateChefDto } from './dto/update-chef.dto';
import { Restaurant } from '../restaurants/schemas/restaurant.schema';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ChefsService {
  constructor(
    @InjectModel(Chef.name)
    private chefModel: mongoose.Model<Chef>,
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  uploadImage(file: Express.Multer.File): string {
    if (!file) {
      throw new Error('No file uploaded');
    }
    return `static/chefs/${file.filename}`;
  }

  private deleteImageFile(imagePath: string) {
    try {
      const normalizedPath = imagePath
        .replace(/^\.\//, '')
        .replace(/^static\//, '');
      const absolutePath = path.join(process.cwd(), 'public', normalizedPath);

      console.log('Trying to delete file at:', absolutePath);

      if (fs.existsSync(absolutePath)) {
        fs.unlinkSync(absolutePath);
        console.log('Successfully deleted file');
      } else {
        console.log('File does not exist');
      }
    } catch (error) {
      console.error('Error deleting image file:', error);
    }
  }

  async create(
    @Body() createChefDto: CreateChefDto,
    file?: Express.Multer.File,
  ): Promise<Chef> {
    if (file) {
      const imagePath = this.uploadImage(file);
      createChefDto.imgUrl = imagePath;
    } else {
      createChefDto.imgUrl = `static/chefs/chefPlaceholder.png`;
    }

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
    file?: Express.Multer.File,
  ): Promise<Chef> {
    const currentChef = await this.chefModel.findById(id);
    if (!currentChef) {
      throw new NotFoundException('Chef not found');
    }

    if (file) {
      if (
        currentChef.imgUrl &&
        currentChef.imgUrl !== `static/chefs/chefPlaceholder.png`
      ) {
        this.deleteImageFile(currentChef.imgUrl);
      }
      const imagePath = this.uploadImage(file);
      updateChefDto.imgUrl = imagePath;
    }

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
    const chef = await this.chefModel.findById(id);
    if (!chef) {
      throw new NotFoundException('Chef not found');
    }

    if (chef.imgUrl && chef.imgUrl !== `static/chefs/chefPlaceholder.png`) {
      this.deleteImageFile(chef.imgUrl);
    }

    const deletedChef = await this.chefModel.findByIdAndDelete(id);
    if (!deletedChef) {
      throw new NotFoundException('Chef not found');
    }

    await this.restaurantModel.updateMany(
      {
        chef: id.toString(),
      },
      { $unset: { chef: 1 } },
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
