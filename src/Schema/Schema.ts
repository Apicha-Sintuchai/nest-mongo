/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type DataDocument = HydratedDocument<Data>;

@Schema()
export class Data {
    @Prop()
    name:string;

    @Prop()
    lastname:string

    @Prop()
    age:number
}

export const mongodoc = SchemaFactory.createForClass(Data)

