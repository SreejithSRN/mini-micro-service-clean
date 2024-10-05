import { IDependencies } from "../../application/interface/iDependencies";
import { controllers } from "../../presentation/controllers";
import {Router} from "express"
export const adminRoutes=(dependencies:IDependencies)=>{

    const {login,addUser}=controllers(dependencies)
    const router=Router()
    router.route("/login").post(login)
    router.route("/adduser").post(addUser)
    return router

}