import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { CreateChefDto } from './dto/create-chef.dto';
import { ParseMongoIdPipe } from '../restaurants/pipes/parse-mongo-id.pipe';
import { Types } from 'mongoose';

@Controller('chefs')
export class ChefsController {
  constructor(private readonly chefsService: ChefsService) {}

  @Post()
  create(@Body() createChefDto: CreateChefDto) {
    return this.chefsService.create(createChefDto);
  }

  @Get()
  findAll(
    @Query('foundedDate') foundedDate?: string,
    @Query('numberOfViews') numberOfViews?: string,
  ) {
    if (foundedDate === 'new') {
      return this.chefsService.getTop3NewestChefs();
    }
    if (numberOfViews === 'mostPopular') {
      return this.chefsService.getTop3MostPopularChefs();
    }
    return this.chefsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseMongoIdPipe) id: Types.ObjectId) {
    return this.chefsService.findById(id);
  }
}
