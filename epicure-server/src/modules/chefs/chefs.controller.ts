import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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
  findAll() {
    return this.chefsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseMongoIdPipe) id: Types.ObjectId) {
    return this.chefsService.findById(id);
  }
}
