import { Module } from '@nestjs/common';
import { AppSettingsService } from './app-settings.service';
import { AppSettingsController } from './app-settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ChefOfTheWeek,
  ChefOfTheWeekSchema,
} from './schemas/chef-of-the-week.schema';
import { Chef, ChefSchema } from '../chefs/schemas/chef.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ChefOfTheWeek.name, schema: ChefOfTheWeekSchema },
      { name: Chef.name, schema: ChefSchema },
    ]),
  ],
  controllers: [AppSettingsController],
  providers: [AppSettingsService],
  exports: [AppSettingsService],
})
export class AppSettingsModule {}
