import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { Dish } from './schemas/dish.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { UpdateDishDto } from './dto/update-dish.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DishesService {
  constructor(
    @InjectModel(Dish.name)
    private dishModel: mongoose.Model<Dish>,
  ) {}

  uploadImage(file: Express.Multer.File): string {
    if (!file) {
      throw new Error('No file uploaded');
    }
    return `static/dishes/${file.filename}`;
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
    @Body() createDishDto: CreateDishDto,
    file?: Express.Multer.File,
  ): Promise<Dish> {
    if (file) {
      const imagePath = this.uploadImage(file);
      createDishDto.imgUrl = imagePath;
    } else {
      createDishDto.imgUrl = `static/dishes/dishPlaceholder.png`;
    }

    const dish = await this.dishModel.create(createDishDto);
    const newDish = await dish.populate({
      path: 'restaurant',
      populate: {
        path: 'chef',
        model: 'Chef',
      },
    });
    return newDish;
  }

  async findAll(): Promise<Dish[]> {
    const dishes = await this.dishModel.find().populate({
      path: 'restaurant',
      populate: {
        path: 'chef',
        model: 'Chef',
      },
    });
    return dishes;
  }

  async findByRestaurantId(restaurantId: string): Promise<Dish[]> {
    const dishes = await this.dishModel
      .find({ restaurant: restaurantId })
      .populate({
        path: 'restaurant',
        populate: {
          path: 'chef',
          model: 'Chef',
        },
      });
    return dishes;
  }

  async findOne(id: Types.ObjectId): Promise<Dish> {
    const dish = await this.dishModel.findById(id).populate({
      path: 'restaurant',
      populate: {
        path: 'chef',
        model: 'Chef',
      },
    });
    if (!dish) {
      throw new NotFoundException(`Dish not found`);
    }
    return dish;
  }

  async update(
    id: Types.ObjectId,
    updateDishDto: UpdateDishDto,
    file?: Express.Multer.File,
  ): Promise<Dish> {
    const currentDish = await this.dishModel.findById(id);
    if (!currentDish) {
      throw new NotFoundException('Dish not found');
    }

    if (file) {
      if (
        currentDish.imgUrl &&
        currentDish.imgUrl !== `static/dishes/dishPlaceholder.png`
      ) {
        this.deleteImageFile(currentDish.imgUrl);
      }
      const imagePath = this.uploadImage(file);
      updateDishDto.imgUrl = imagePath;
    }

    const updatedDish = await this.dishModel
      .findByIdAndUpdate(id, updateDishDto, { new: true })
      .populate({
        path: 'restaurant',
        populate: {
          path: 'chef',
          model: 'Chef',
        },
      });
    if (!updatedDish) {
      throw new NotFoundException('Dish not found');
    }
    return updatedDish;
  }

  async remove(id: Types.ObjectId): Promise<Dish> {
    const dish = await this.dishModel.findById(id);
    if (!dish) {
      throw new NotFoundException('Dish not found');
    }

    if (dish.imgUrl && dish.imgUrl !== `static/dishes/dishPlaceholder.png`) {
      this.deleteImageFile(dish.imgUrl);
    }
    const deletedDish = await this.dishModel.findByIdAndDelete(id);
    if (!deletedDish) {
      throw new NotFoundException('Dish not found');
    }
    return deletedDish;
  }

  async getByName(name: string): Promise<Dish[]> {
    return this.dishModel
      .find({
        name: { $regex: name, $options: 'i' },
      })
      .populate({
        path: 'restaurant',
        populate: {
          path: 'chef',
          model: 'Chef',
        },
      })
      .exec();
  }
}
