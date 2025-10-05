import jwt from 'jsonwebtoken'
import express from 'express'

const authRouter = express.Router()
const JWT_SECRETKEY= 'supersecret123'

authRouter.use((req,res,next)=>{
    const authHeader = req.headers['authorization']
    if (!authHeader){
        return res.status(401).json({message:'authheader is not available'})
    }
    const token = authHeader.split(" ")[1]
       if (!token){
        return res.status(401).json({message:'Access token is required'})
    }
    jwt.verify(token, JWT_SECRETKEY, (err,userDecoded)=>{
        if(err) return res.status(403).json({message:'invalid or expired token'})
        req.user = userDecoded;
        // console.log('userdecoded from jwt verify in auth header', userDecoded)

        next();
    })
 
})

export default authRouter;