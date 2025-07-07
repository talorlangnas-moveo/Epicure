import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { ValidateRestaurantPipe } from './pipes/validate-restaurant.pipe';
import { ValidateRestaurantParamPipe } from './pipes/validate-restaurant-param.pipe';
import { ParseMongoIdPipe } from '../restaurants/pipes/parse-mongo-id.pipe';
import { Types } from 'mongoose';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './schemas/dish.schema';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body(ValidateRestaurantPipe) createDishDto: CreateDishDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Dish> {
    return this.dishesService.create(createDishDto, file);
  }

  @Get()
  findAll(@Query('name') name?: string): Promise<Dish[]> {
    if (name) {
      return this.dishesService.getByName(name);
    }
    return this.dishesService.findAll();
  }

  @Get('by-restaurantId')
  findByRestaurantId(
    @Query('restaurantId', ValidateRestaurantParamPipe) restaurantId: string,
  ): Promise<Dish[]> {
    return this.dishesService.findByRestaurantId(restaurantId);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: Types.ObjectId): Promise<Dish> {
    return this.dishesService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
    @Body(ValidateRestaurantPipe) updateDishDto: UpdateDishDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Dish> {
    return this.dishesService.update(id, updateDishDto, file);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: Types.ObjectId): Promise<Dish> {
    return this.dishesService.remove(id);
  }
}
