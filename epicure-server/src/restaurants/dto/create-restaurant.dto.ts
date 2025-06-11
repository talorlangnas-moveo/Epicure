import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imgUrl: string;

  @IsString()
  @IsOptional()
  homePageImgUrlMobile?: string;

  @IsString()
  @IsOptional()
  homePageImgUrlDesktop?: string;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsNotEmpty()
  openingTime: string;

  @IsString()
  @IsNotEmpty()
  closingTime: string;

  @IsString()
  @IsNotEmpty()
  foundedDate: string;
}
