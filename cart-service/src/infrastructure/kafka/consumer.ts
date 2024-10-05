import { consumer } from "."
import { stopConsumer } from "./stopConsumer"
import { createSubscriber } from "./subscriber"

export const runConsumer= async()=>{
    try {
        await consumer.connect()

        await consumer.subscribe({
            topic:"to-user",
            fromBeginning:true
        })

        await consumer.subscribe({
            topic:"product",
            fromBeginning:true
        })

        const subscriber:any=createSubscriber()
        await consumer.run({
            eachMessage:async({message})=>{
                const {key,value}=message
                const subscriberMethod=String(key)
                const subscriberData=JSON.parse(String(value))
                try {
                    await subscriber[subscriberMethod](subscriberData)                    
                } catch (error:any) {
                    console.error(`Error processing message from topic: ${error.message}`)
                    await stopConsumer()
                    throw new Error(error?.message)                    
                }
            }
        })        
    } catch (error:any) {
        console.error("Consumer error:", error.message)
        throw new Error (error?.message)        
    }
}