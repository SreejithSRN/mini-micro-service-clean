import mongoose, { Schema } from "mongoose";
import { UserEntity } from "../../../../domain/entities/userEntity";
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default :"user",
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }

},{timestamps:true})

export const User=mongoose.model<UserEntity>("users",userSchema) 