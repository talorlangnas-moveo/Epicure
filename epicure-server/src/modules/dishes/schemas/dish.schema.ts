import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum DishCategory {
  SPICY = 'spicy',
  VEGETARIAN = 'vegetarian',
  VEGAN = 'vegan',
}

export type DishDocument = Dish & Document;

@Schema()
export class Dish {
  @Prop({
    type: Types.ObjectId,
    ref: 'Restaurant',
    required: true,
    index: true,
  })
  restaurantId: Types.ObjectId;
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imgUrl: string;

  @Prop({ required: true })
  price: number;

  @Prop({ enum: DishCategory })
  dishCategory: DishCategory;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
