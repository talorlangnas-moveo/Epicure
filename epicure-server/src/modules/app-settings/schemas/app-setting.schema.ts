import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AppSettingDocument = AppSetting & Document;

@Schema()
export class AppSetting {
  @Prop({
    type: Types.ObjectId,
    ref: 'Chef',
    index: true,
  })
  chefOfTheWeek: Types.ObjectId;
}

export const AppSettingSchema = SchemaFactory.createForClass(AppSetting);
