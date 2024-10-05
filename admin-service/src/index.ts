import dbConnection from "./infrastructure/database/dbConnection"
import server from "./presentation/server"

(async()=>{
    try {
        server 
        await dbConnection().catch((error:any)=>{
            console.error("Database connection error:",error.message)
            process.exit(1)
        })
        console.log("admin database connection successful")        
    } catch (error:any) {
        console.error("admin database connection failed",error.message)
        
        process.exit(1)
    }
})()
