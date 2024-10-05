import jwt from "jsonwebtoken"
export const verifyToken=(token:string):any=>{
    const secretkey:jwt.Secret=process.env.AUTH_JWT_SECRET as jwt.Secret

    try {
        const decodedToken=jwt.verify(token,secretkey)
        console.log("🚀 ~ verifyToken ~ decodedToken:", decodedToken)
        return decodedToken            
    } catch (error:any) {
        throw new Error(error.message)
    }
}