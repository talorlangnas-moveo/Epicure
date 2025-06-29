import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema } from './schemas/restaurant.schema';
import { Chef, ChefSchema } from '../chefs/schemas/chef.schema';
import { ValidateChefPipe } from './pipes/validate-chef.pipe';
import { Dish, DishSchema } from '../dishes/schemas/dish.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
      { name: Chef.name, schema: ChefSchema },
      { name: Dish.name, schema: DishSchema },
    ]),
    MulterModule.register({
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/^image\/(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 16 * 1024 * 1024, // 16MB
      },
    }),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, ValidateChefPipe],
})
export class RestaurantsModule {}
