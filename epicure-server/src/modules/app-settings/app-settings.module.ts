import { Module } from '@nestjs/common';
import { AppSettingsService } from './app-settings.service';
import { AppSettingsController } from './app-settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppSetting, AppSettingSchema } from './schemas/app-setting.schema';
import { Chef, ChefSchema } from '../chefs/schemas/chef.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AppSetting.name, schema: AppSettingSchema },
      { name: Chef.name, schema: ChefSchema },
    ]),
  ],
  controllers: [AppSettingsController],
  providers: [AppSettingsService],
  exports: [AppSettingsService],
})
export class AppSettingsModule {}
