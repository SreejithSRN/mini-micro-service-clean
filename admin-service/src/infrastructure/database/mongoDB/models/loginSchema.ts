import mongoose, { Schema } from "mongoose"
import { userEntity } from "../../../../domain/entities"

const adminSchema= new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true 
    }, 
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true
})

export const Admin=mongoose.model<userEntity>("loginCredentials",adminSchema)