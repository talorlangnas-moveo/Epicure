import { Body, Injectable } from '@nestjs/common';
import { UpdateChefOfTheWeekDto } from './dto/update-chef-of-the-week.dto';
import { ChefOfTheWeek } from './schemas/chef-of-the-week.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppSettingsService {
  constructor(
    @InjectModel(ChefOfTheWeek.name)
    private readonly chefOfTheWeekModel: mongoose.Model<ChefOfTheWeek>,
  ) {}

  async findAll(): Promise<ChefOfTheWeek> {
    const chefOfTheWeek = await this.chefOfTheWeekModel.find().populate('chef');
    console.log('chefOfTheWeek: ', chefOfTheWeek[0]);
    return chefOfTheWeek[0];
  }

  async update(
    @Body() updateChefOfTheWeekDto: UpdateChefOfTheWeekDto,
  ): Promise<ChefOfTheWeek> {
    const currentChefOfTheWeek = await this.findAll();
    if (
      currentChefOfTheWeek &&
      currentChefOfTheWeek.chef._id.toString() === updateChefOfTheWeekDto.chef
    ) {
      return currentChefOfTheWeek;
    }
    const chefOfTheWeek = await this.chefOfTheWeekModel
      .findOneAndUpdate(
        {}, // empty filter to match any document
        { chef: updateChefOfTheWeekDto.chef },
        {
          new: true, // return the updated document
          upsert: true, // create if doesn't exist
        },
      )
      .populate('chef');

    return chefOfTheWeek;
  }
}
