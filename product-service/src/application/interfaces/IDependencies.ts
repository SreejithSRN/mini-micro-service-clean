import { IRepositories } from "./IRepositories";
import { IUseCases } from "./IUsecase";

export interface IDependencies{
    repositories:IRepositories,
    useCases:IUseCases    
}