import { IRepositories } from "./IRpositories";
import { IUsecases } from "./iUsecases";

export interface IDependencies{
    repositories:IRepositories,
    useCases:IUsecases
}