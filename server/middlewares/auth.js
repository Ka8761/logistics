import jwt from 'jsonwebtoken'
import express from 'express'

const authRouter = express.Router()

authRouter.use((req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'authheader is not available' });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token is required' });
    }

    const secret = process.env.JWT_SECRET || 'supersecret123';
    if (!secret) {
        console.error("JWT_SECRET is missing! Cannot verify token.");
        return res.status(500).json({ message: "Server configuration error" });
    }

    jwt.verify(token, secret, (err, userDecoded) => {
        if (err) {
            console.log("Token verification failed:", err.message);
            return res.status(403).json({ message: 'invalid or expired token' });
        }
        req.user = userDecoded;
        next();
    });
});

export default authRouter;
