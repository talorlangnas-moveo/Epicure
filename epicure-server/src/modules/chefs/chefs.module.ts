import { Module } from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { ChefsController } from './chefs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chef, ChefSchema } from './schemas/chef.schema';
import {
  Restaurant,
  RestaurantSchema,
} from '../restaurants/schemas/restaurant.schema';
import {
  ChefOfTheWeek,
  ChefOfTheWeekSchema,
} from '../app-settings/schemas/chef-of-the-week.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { AppSettingsService } from '../app-settings/app-settings.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chef.name, schema: ChefSchema },
      { name: Restaurant.name, schema: RestaurantSchema },
      { name: ChefOfTheWeek.name, schema: ChefOfTheWeekSchema },
    ]),
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = path.join(process.cwd(), 'public', 'chefs');
          fs.mkdirSync(uploadPath, { recursive: true });
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}-${file.originalname}`);
        },
      }),
    }),
  ],
  controllers: [ChefsController],
  providers: [ChefsService, AppSettingsService],
})
export class ChefsModule {}
