import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  async findAll() {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.restaurantsService.findById(id);
  }
}
