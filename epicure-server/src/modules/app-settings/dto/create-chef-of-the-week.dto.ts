import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateChefOfTheWeekDto {
  @IsMongoId()
  @IsNotEmpty()
  chef: string;
}
