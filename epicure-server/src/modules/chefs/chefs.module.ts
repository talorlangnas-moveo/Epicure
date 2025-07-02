import { Module } from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { ChefsController } from './chefs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chef, ChefSchema } from './schemas/chef.schema';
import {
  Restaurant,
  RestaurantSchema,
} from '../restaurants/schemas/restaurant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chef.name, schema: ChefSchema },
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [ChefsController],
  providers: [ChefsService],
})
export class ChefsModule {}
