import jwt from 'jsonwebtoken'
import express from 'express'

const authRouter = express.Router()
const JWT_SECRETKEY= 'supersecret123'

authRouter.use((req,res,next)=>{
   //const authHeader = req.headers['authheader'];
   const authHeader = req.headers['authorization']
    if (!authHeader){
        return res.status(401).json({message:'authheader is not available'})
    }
    const token = authHeader.split(" ")[1]
       if (!token){
        return res.status(401).json({message:'Access token is required'})
    }
    jwt.verify(token, JWT_SECRETKEY, (err,userDecoded)=>{
        console.log("[Backend Auth] JWT verify failed:", err.name, err.message); 
        if(err) return res.status(403).json({message:'invalid or expired token'})
        req.user = userDecoded;
        // console.log('userdecoded from jwt verify in auth header', userDecoded)

        next();
    })
 
})

export default authRouter;

authRouter.use((req, res, next) => {
    console.log("[Backend Auth] All headers:", req.headers);  // ← Add this
    console.log("[Backend Auth] authorization header:", req.headers.authorization);  // ← Add this
    console.log("[Backend Auth] authheader header:", req.headers.authheader);  // ← Add this

  const authHeader = req.headers['authheader'];
    if (!authHeader) {
        return res.status(401).json({ message: 'authheader is not available' });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token is required' });
    }

    jwt.verify(token, JWT_SECRETKEY, (err, userDecoded) => {
        if (err) {
            return res.status(403).json({ message: 'invalid or expired token' });
        }
        req.user = userDecoded;
        next();
    });
});