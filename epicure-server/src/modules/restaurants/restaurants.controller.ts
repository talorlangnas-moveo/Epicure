import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { ParseMongoIdPipe } from './pipes/parse-mongo-id.pipe';
import { Types } from 'mongoose';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  async findAll(
    @Query('foundedDate') foundedDate?: string,
    @Query('rating') rating?: string,
    @Query('openNow') openNow?: string,
  ) {
    if (foundedDate === 'new') {
      return this.restaurantsService.getTop3NewestRestaurants();
    }
    if (rating === 'mostPopular') {
      return this.restaurantsService.getTop3MostPopular();
    }
    if (openNow === 'true') {
      return this.restaurantsService.getOpenRestaurantsNow();
    }
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseMongoIdPipe) id: Types.ObjectId) {
    return this.restaurantsService.findById(id);
  }
}
