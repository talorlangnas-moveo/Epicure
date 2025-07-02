import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { ValidateRestaurantPipe } from './pipes/validate-restaurant.pipe';
import { ValidateRestaurantParamPipe } from './pipes/validate-restaurant-param.pipe';
import { ParseMongoIdPipe } from '../restaurants/pipes/parse-mongo-id.pipe';
import { Types } from 'mongoose';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './schemas/dish.schema';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post()
  create(
    @Body(ValidateRestaurantPipe) createDishDto: CreateDishDto,
  ): Promise<Dish> {
    return this.dishesService.create(createDishDto);
  }

  @Get()
  findAll(): Promise<Dish[]> {
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
  update(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
    @Body(ValidateRestaurantPipe) updateDishDto: UpdateDishDto,
  ): Promise<Dish> {
    return this.dishesService.update(id, updateDishDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: Types.ObjectId): Promise<Dish> {
    return this.dishesService.remove(id);
  }
}
