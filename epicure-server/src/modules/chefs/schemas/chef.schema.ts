import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChefDocument = Chef & Document;

@Schema()
export class Chef {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  imgUrl: string;

  @Prop({ required: true, default: Date.now })
  foundedDate: Date;

  @Prop({ required: true, default: 0 })
  numberOfViews: number;
}

export const ChefSchema = SchemaFactory.createForClass(Chef);
