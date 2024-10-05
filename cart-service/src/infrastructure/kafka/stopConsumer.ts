import { consumer } from "."

export const stopConsumer=async()=>{
    try {
        console.log("Stopping consumer from cart service....")
        await consumer.stop()
        await consumer.disconnect()
        console.log("Consumer stopped")
        
    } catch (error:any) {
        console.error("Error stopping consumer from cart service:",error)
        throw new Error (error?.message)
        
    }
}