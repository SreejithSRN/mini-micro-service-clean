import { Types } from "mongoose";

export interface Product{
    _id?:Types.ObjectId,
    name:string,
    description:string,
    price:number,
    stock:number,
    createdAt?:Date,
    updateAt?:Date,
}