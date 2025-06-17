import {
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  IsEnum,
  IsMongoId,
} from 'class-validator';
import { DishCategory } from '../schemas/dish.schema';

export class CreateDishDto {
  @IsMongoId()
  @IsNotEmpty()
  restaurantId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imgUrl: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsEnum(DishCategory)
  @IsOptional()
  dishCategory: DishCategory;
}
