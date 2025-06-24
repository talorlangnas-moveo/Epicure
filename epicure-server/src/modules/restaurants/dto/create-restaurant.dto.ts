import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsOptional,
  IsMongoId,
  Max,
  Min,
} from 'class-validator';

export class CreateRestaurantDto {
  @IsMongoId()
  @IsOptional()
  chefId?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  imgUrl: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  @IsNotEmpty()
  openingTime: string;

  @IsString()
  @IsNotEmpty()
  closingTime: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  foundedDate: Date;
}
