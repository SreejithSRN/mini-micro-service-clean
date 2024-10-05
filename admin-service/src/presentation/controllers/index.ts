import { IDependencies } from "../../application/interface/iDependencies";
import { loginController } from "./login";
import { addUserController } from "./userController";

export const controllers=(dependencies:IDependencies)=>{
    return {
        login:loginController(dependencies),
        addUser:addUserController(dependencies)
    }
}