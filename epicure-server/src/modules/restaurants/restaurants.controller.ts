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
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { ParseMongoIdPipe } from './pipes/parse-mongo-id.pipe';
import { Types } from 'mongoose';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './schemas/restaurant.schema';
import { ValidateChefPipe } from './pipes/validate-chef.pipe';
import { ValidateChefParamPipe } from './pipes/validate-chef-param.pipe';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body(ValidateChefPipe) createRestaurantDto: CreateRestaurantDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Restaurant> {
    return this.restaurantsService.create(createRestaurantDto, file);
  }

  @Get()
  async findAll(
    @Query('foundedDate') foundedDate?: string,
    @Query('rating') rating?: string,
    @Query('openNow') openNow?: string,
  ): Promise<Restaurant[]> {
    if (foundedDate === 'new') {
      return this.restaurantsService.getTop3NewestRestaurants();
    }
    if (rating === 'mostPopular') {
      return this.restaurantsService.getTop3MostPopularRestaurants();
    }
    if (openNow === 'true') {
      return this.restaurantsService.getOpenRestaurantsNow();
    }
    return this.restaurantsService.findAll();
  }

  @Get('by-chefId')
  findByChefId(
    @Query('chefId', ValidateChefParamPipe) chefId: string,
  ): Promise<Restaurant[]> {
    return this.restaurantsService.findByChefId(chefId);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
  ): Promise<Restaurant> {
    return this.restaurantsService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
    @Body(ValidateChefPipe) updateRestaurantDto: UpdateRestaurantDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Restaurant> {
    return this.restaurantsService.update(id, updateRestaurantDto, file);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
  ): Promise<Restaurant> {
    return this.restaurantsService.remove(id);
  }
}
