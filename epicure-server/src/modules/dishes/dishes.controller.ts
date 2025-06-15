import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { ValidateRestaurantPipe } from './pipes/validate-restaurant.pipe';
import { ValidateRestaurantParamPipe } from './pipes/validate-restaurant-param.pipe';
import { ParseMongoIdPipe } from '../restaurants/pipes/parse-mongo-id.pipe';
import { Types } from 'mongoose';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post()
  create(@Body(ValidateRestaurantPipe) createDishDto: CreateDishDto) {
    return this.dishesService.create(createDishDto);
  }

  @Get()
  findAll() {
    return this.dishesService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseMongoIdPipe) id: Types.ObjectId) {
    return this.dishesService.findById(id);
  }

  @Get('by-restaurantId')
  findByRestaurantId(
    @Query('restaurantId', ValidateRestaurantParamPipe) restaurantId: string,
  ) {
    return this.dishesService.findByRestaurantId(restaurantId);
  }
}
