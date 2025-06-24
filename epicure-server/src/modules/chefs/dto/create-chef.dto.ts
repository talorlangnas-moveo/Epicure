import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChefDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  imgUrl: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  foundedDate: Date;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  numberOfViews: number;
}
