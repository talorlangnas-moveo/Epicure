import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { DishesModule } from '../dishes/dishes.module';
import { ChefsModule } from '../chefs/chefs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    RestaurantsModule,
    DishesModule,
    ChefsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
