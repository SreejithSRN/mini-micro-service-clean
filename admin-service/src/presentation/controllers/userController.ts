import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interface/iDependencies";
import { userEntity } from "../../domain/entities";

export const addUserController=(dependencies:IDependencies)=>{
    const{useCases:{addUserUseCase}}=dependencies

    if (!addUserUseCase) {
        throw new Error("addUserUseCase is not defined in dependencies");
      }

      return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const userData:userEntity=req.body
            const addedUser:userEntity | null =await addUserUseCase(dependencies).execute(userData)
            res.status(201).json(addedUser)
        } catch (error:any) {
            next(error)
            
        }

      }

}