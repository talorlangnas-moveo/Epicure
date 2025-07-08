import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateAppSettingDto {
  @IsMongoId()
  @IsNotEmpty()
  chefOfTheWeek: string;
}
