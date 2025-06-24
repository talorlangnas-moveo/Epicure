import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  IsEnum,
  IsMongoId,
  Min,
} from 'class-validator';
import { DishCategory } from '../schemas/dish.schema';

export class CreateDishDto {
  @IsMongoId()
  @IsOptional()
  restaurantId?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imgUrl: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  price: number;

  @IsEnum(DishCategory)
  @IsOptional()
  dishCategory: DishCategory;
}
