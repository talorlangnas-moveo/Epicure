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
import { Restaurant, RestaurantDocument } from './schemas/restaurant.schema';
import { ValidateChefPipe } from './pipes/validate-chef.pipe';
import { FileInterceptor } from '@nestjs/platform-express';

type RestaurantResponse = Omit<Restaurant, 'imgUrl'> & {
  imgUrl?: string; // base64 string
};

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body(ValidateChefPipe) createRestaurantDto: CreateRestaurantDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Restaurant> {
    if (file) {
      createRestaurantDto.imgUrl = file.buffer;
      createRestaurantDto.imgMimeType = file.mimetype;
    }
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  async findAll(
    @Query('foundedDate') foundedDate?: string,
    @Query('rating') rating?: string,
    @Query('openNow') openNow?: string,
  ): Promise<RestaurantResponse[]> {
    let restaurants: Restaurant[];

    if (foundedDate === 'new') {
      restaurants = await this.restaurantsService.getTop3NewestRestaurants();
    } else if (rating === 'mostPopular') {
      restaurants =
        await this.restaurantsService.getTop3MostPopularRestaurants();
    } else if (openNow === 'true') {
      restaurants = await this.restaurantsService.getOpenRestaurantsNow();
    } else {
      restaurants = await this.restaurantsService.findAll();
    }

    return restaurants.map((restaurant) =>
      this.transformRestaurantResponse(restaurant as RestaurantDocument),
    );
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
  ): Promise<RestaurantResponse> {
    const restaurant = await this.restaurantsService.findOne(id);
    return this.transformRestaurantResponse(restaurant as RestaurantDocument);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
    @Body(ValidateChefPipe) updateRestaurantDto: UpdateRestaurantDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Restaurant> {
    if (file) {
      updateRestaurantDto.imgUrl = file.buffer;
      updateRestaurantDto.imgMimeType = file.mimetype;
    }
    return this.restaurantsService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
  ): Promise<Restaurant> {
    return this.restaurantsService.remove(id);
  }

  private transformRestaurantResponse(
    restaurant: RestaurantDocument | null,
  ): RestaurantResponse {
    if (!restaurant) {
      return {
        name: '',
        rating: 0,
        openingTime: '',
        closingTime: '',
        foundedDate: new Date(),
      };
    }

    const mongooseDoc = restaurant.toObject() as RestaurantDocument;
    const response = {
      ...mongooseDoc,
      imgUrl: mongooseDoc.imgUrl
        ? `data:${mongooseDoc.imgMimeType};base64,${mongooseDoc.imgUrl.toString('base64')}`
        : undefined,
    };

    return response;
  }
}
