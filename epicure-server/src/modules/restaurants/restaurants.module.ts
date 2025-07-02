import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema } from './schemas/restaurant.schema';
import { Chef, ChefSchema } from '../chefs/schemas/chef.schema';
import { ValidateChefPipe } from './pipes/validate-chef.pipe';
import { Dish, DishSchema } from '../dishes/schemas/dish.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
      { name: Chef.name, schema: ChefSchema },
      { name: Dish.name, schema: DishSchema },
    ]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, ValidateChefPipe],
})
export class RestaurantsModule {}
