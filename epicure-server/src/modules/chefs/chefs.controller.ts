import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { CreateChefDto } from './dto/create-chef.dto';
import { ParseMongoIdPipe } from '../restaurants/pipes/parse-mongo-id.pipe';
import { Types } from 'mongoose';
import { UpdateChefDto } from './dto/update-chef.dto';
import { Chef } from './schemas/chef.schema';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('chefs')
export class ChefsController {
  constructor(private readonly chefsService: ChefsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createChefDto: CreateChefDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Chef> {
    return this.chefsService.create(createChefDto, file);
  }

  @Get()
  findAll(
    @Query('foundedDate') foundedDate?: string,
    @Query('numberOfViews') numberOfViews?: string,
    @Query('name') name?: string,
  ): Promise<Chef[]> {
    if (foundedDate === 'new') {
      return this.chefsService.getTop3NewestChefs();
    }
    if (numberOfViews === 'mostPopular') {
      return this.chefsService.getTop3MostPopularChefs();
    }
    if (name) {
      return this.chefsService.getByName(name);
    }
    return this.chefsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: Types.ObjectId): Promise<Chef> {
    return this.chefsService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
    @Body() updateChefDto: UpdateChefDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Chef> {
    return this.chefsService.update(id, updateChefDto, file);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: Types.ObjectId): Promise<Chef> {
    return this.chefsService.remove(id);
  }
}
