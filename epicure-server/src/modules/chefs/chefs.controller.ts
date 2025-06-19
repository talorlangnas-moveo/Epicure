import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { CreateChefDto } from './dto/create-chef.dto';
import { ParseMongoIdPipe } from '../restaurants/pipes/parse-mongo-id.pipe';
import { Types } from 'mongoose';
import { UpdateChefDto } from './dto/update-chef.dto';
import { Chef } from './schemas/chef.schema';

@Controller('chefs')
export class ChefsController {
  constructor(private readonly chefsService: ChefsService) {}

  @Post()
  create(@Body() createChefDto: CreateChefDto): Promise<Chef> {
    return this.chefsService.create(createChefDto);
  }

  @Get()
  findAll(
    @Query('foundedDate') foundedDate?: string,
    @Query('numberOfViews') numberOfViews?: string,
  ): Promise<Chef[]> {
    if (foundedDate === 'new') {
      return this.chefsService.getTop3NewestChefs();
    }
    if (numberOfViews === 'mostPopular') {
      return this.chefsService.getTop3MostPopularChefs();
    }
    return this.chefsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseMongoIdPipe) id: Types.ObjectId): Promise<Chef> {
    return this.chefsService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
    @Body() updateChefDto: UpdateChefDto,
  ): Promise<Chef> {
    return this.chefsService.updateById(id, updateChefDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: Types.ObjectId): Promise<Chef> {
    return this.chefsService.removeById(id);
  }
}
