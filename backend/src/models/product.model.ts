import { Schema, model } from "mongoose";

export interface Product{
  id: string;
  name: string;
  shortDescription: string;
  stars: number;
  rating: number;
  price: number;
  imageUrl: string;
  tags: string[];
}

export const ProductSchema = new Schema<Product>(
    {
        name: {type:String, required: true},
        shortDescription: {type:String, required: true},
        stars: {type:Number, required: true},
        rating: {type:Number},
        price: {type:Number, required: true},
        imageUrl: {type:String, required: true},
        tags: {type:[String]},
    },{
        toJSON:{ //when api gives data to mongoose then set id to _id of mongoose
            virtuals:true
        },
        toObject:{ // when mongoose send data to api , set _id to id product object
            virtuals: true
        },
        timestamps:true
    }
);


export const ProductModel = model<Product>('product',ProductSchema)