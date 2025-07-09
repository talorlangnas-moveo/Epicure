import { Controller, Get, Body, Put } from '@nestjs/common';
import { AppSettingsService } from './app-settings.service';
import { UpdateChefOfTheWeekDto } from './dto/update-chef-of-the-week.dto';
import { ValidateChefPipe } from '../restaurants/pipes/validate-chef.pipe';
import { ChefOfTheWeek } from './schemas/chef-of-the-week.schema';

@Controller('app-settings')
export class AppSettingsController {
  constructor(private readonly appSettingsService: AppSettingsService) {}

  @Get('chef-of-the-week')
  findAll(): Promise<ChefOfTheWeek> {
    return this.appSettingsService.findAll();
  }

  @Put('chef-of-the-week')
  update(
    @Body(ValidateChefPipe) updateChefOfTheWeekDto: UpdateChefOfTheWeekDto,
  ): Promise<ChefOfTheWeek> {
    return this.appSettingsService.update(updateChefOfTheWeekDto);
  }
}
