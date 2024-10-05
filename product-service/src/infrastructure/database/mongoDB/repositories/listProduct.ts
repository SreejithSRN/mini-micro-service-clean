import { Product } from "../../../../domain/entities";
import { verifyToken } from "../../../../util/verifyToken";
import { product } from "../models/productSchema";

export const listProduct= async(token:string):Promise   < Product[] |null> =>{
    try {
        const decodedToken:any =await verifyToken(token)
        const  Role:string | undefined=decodedToken?.role
        if(!Role){
            throw new Error("Role not found in token payload")
        }
        if(Role==="user"){
            throw new Error ("unauthorized access: user role have no permission to list product")
        }
        const products:Product[]=await product.find()
        return products        
    } catch (error) {
        console.error("Failed to list product",error)
        throw new Error ("failed to list products")        
    }
}