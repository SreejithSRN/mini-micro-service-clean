import Jwt  from "jsonwebtoken"

export default (payload:{userId:string,userEmail:string,isAdmin:boolean,isBlocked:boolean})=>{
    return Jwt.sign(payload,String(process.env.AUTH_JWT_SECRET),{expiresIn:60*60*24})
}
