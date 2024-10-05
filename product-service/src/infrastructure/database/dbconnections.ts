import mongoose from "mongoose";

export default async ()=>{
    require("dotenv").config()
    try {
        await mongoose.connect(String(process.env.MONGO_URI).trim())
        console.log("Product database connected successfully")
        
    } catch (error:any) {
        console.error("Database Connection failed");
        console.error(error.message);
        process.exit(1);
    }

}
