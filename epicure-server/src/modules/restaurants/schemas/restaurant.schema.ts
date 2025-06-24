import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop({
    type: Types.ObjectId,
    ref: 'Chef',
    index: true,
  })
  chefId?: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  imgUrl: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  openingTime: string;

  @Prop({ required: true })
  closingTime: string;

  @Prop({ required: true, default: Date.now })
  foundedDate: Date;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
