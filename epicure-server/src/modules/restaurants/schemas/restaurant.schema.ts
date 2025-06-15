import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imgUrl: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  openingTime: string;

  @Prop({ required: true })
  closingTime: string;

  @Prop({ required: true })
  foundedDate: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
