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

  @Prop({
    type: Buffer,
    validate: {
      validator: function (v: Buffer) {
        // 16MB = 16 * 1024 * 1024 bytes
        return !v || v.length <= 16 * 1024 * 1024;
      },
      message: 'Image size must be less than 16MB',
    },
  })
  imgUrl?: Buffer;

  @Prop()
  imgMimeType?: string;

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
