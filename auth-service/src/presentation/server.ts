import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { authRoutes } from "../infrastructure/routes/authRoutes";
import { dependencies } from "../config/dependencies";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 8001;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/", authRoutes(dependencies))

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log(err)
    const errorResponse={
        errors:[{message:err?.message || "Something went wrong"}]
    }

    return res.status(500).json(errorResponse)
})
app.listen(PORT,()=>{
    console.log(`connected to auth service at port ${PORT}`)
})

export default app