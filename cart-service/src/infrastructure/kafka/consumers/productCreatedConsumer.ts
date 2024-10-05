import { Types } from "mongoose";
import { insertProduct } from "../../database/mongoDB/repositories/addProduct";

export default async(data:{
    _id?:Types.ObjectId;
    name:string;
    description:string;
    price:number;
    stock:number;
})=>{
    try {
        console.log("product created through consumer in cart service")
        await insertProduct(data)        
    } catch (error:any) {
        throw new Error (error?.message)
        
    }

}