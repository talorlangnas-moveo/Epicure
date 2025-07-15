import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { DishesModule } from '../dishes/dishes.module';
import { ChefsModule } from '../chefs/chefs.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppSettingsModule } from '../app-settings/app-settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'public'),
      serveRoot: '/static',
    }),
    RestaurantsModule,
    DishesModule,
    ChefsModule,
    AppSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
