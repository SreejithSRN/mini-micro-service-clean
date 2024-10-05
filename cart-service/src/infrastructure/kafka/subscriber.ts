import productCreatedConsumer from "./consumers/productCreatedConsumer"
import userCreatedConsumer from "./consumers/userCreatedConsumer"

export const createSubscriber=()=>{
    return{
        userCreated:userCreatedConsumer,
        productcreated:productCreatedConsumer
    }
}