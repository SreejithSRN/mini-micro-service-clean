import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const productRoute=(dependencies:IDependencies)=>{
    const{addProduct,listProduct}=controllers(dependencies)
    const router=Router()
    router.route("/addproduct").post(addProduct)
    router.route("/product").get(listProduct)
    return router

}