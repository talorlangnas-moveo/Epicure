import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ChefOfTheWeekDocument = ChefOfTheWeek & Document;

@Schema({ timestamps: true })
export class ChefOfTheWeek {
  @Prop({
    type: Types.ObjectId,
    ref: 'Chef',
    index: true,
  })
  chef: Types.ObjectId;
}

export const ChefOfTheWeekSchema = SchemaFactory.createForClass(ChefOfTheWeek);
