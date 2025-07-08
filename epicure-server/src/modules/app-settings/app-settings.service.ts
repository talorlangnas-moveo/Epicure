import { Body, Injectable } from '@nestjs/common';
import { CreateAppSettingDto } from './dto/create-app-setting.dto';
import { UpdateAppSettingDto } from './dto/update-app-setting.dto';
import { AppSetting } from './schemas/app-setting.schema';
import mongoose, { Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppSettingsService {
  constructor(
    @InjectModel(AppSetting.name)
    private readonly appSettingModel: mongoose.Model<AppSetting>,
  ) {}

  async create(@Body() createAppSettingDto: CreateAppSettingDto) {
    const appSetting = await this.appSettingModel.create(createAppSettingDto);
    const newAppSetting = await appSetting.populate('chefOfTheWeek');
    return newAppSetting;
  }

  findAll() {
    return `This action returns all appSettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appSetting`;
  }

  update(id: number, updateAppSettingDto: UpdateAppSettingDto) {
    return `This action updates a #${id} appSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} appSetting`;
  }
}
