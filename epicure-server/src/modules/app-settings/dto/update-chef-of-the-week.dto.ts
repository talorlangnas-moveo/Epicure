import { PartialType } from '@nestjs/mapped-types';
import { CreateChefOfTheWeekDto } from './create-chef-of-the-week.dto';

export class UpdateChefOfTheWeekDto extends PartialType(
  CreateChefOfTheWeekDto,
) {}
