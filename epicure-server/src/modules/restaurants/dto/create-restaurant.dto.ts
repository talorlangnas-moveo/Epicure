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
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateRestaurantDto {
  @IsMongoId()
  @IsOptional()
  chefId?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @MaxLength(16 * 1024 * 1024, {
    message: 'Image size must be less than 16MB',
  })
  imgUrl?: Buffer;

  @IsOptional()
  @IsString()
  @Matches(/^image\/(jpg|jpeg|png|gif)$/, {
    message: 'Invalid image MIME type',
  })
  imgMimeType?: string;

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
