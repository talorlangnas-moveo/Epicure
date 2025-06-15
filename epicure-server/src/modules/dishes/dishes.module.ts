import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dish, DishSchema } from './schemas/dish.schema';
import {
  Restaurant,
  RestaurantSchema,
} from '../restaurants/schemas/restaurant.schema';
import { ValidateRestaurantPipe } from './pipes/validate-restaurant.pipe';
import { ValidateRestaurantParamPipe } from './pipes/validate-restaurant-param.pipe';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Dish.name, schema: DishSchema },
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [DishesController],
  providers: [
    DishesService,
    ValidateRestaurantPipe,
    ValidateRestaurantParamPipe,
  ],
})
export class DishesModule {}
