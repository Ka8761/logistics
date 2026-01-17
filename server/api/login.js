import express from 'express'
import bcrypt from 'bcrypt'
import UserModel from '../models/users.js'
import jwt from 'jsonwebtoken'

import {body, validationResult} from 'express-validator'

const loginRouter = express.Router()
const JWT_SECRETKEY = process.env.JWT_SECRET 

loginRouter.post('/login', 
  [body('email').isEmail(),
   body('password').isString().notEmpty()
  ],
  async(req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(401).json({errors:errors.array()})
    }
   
    const {email, password} = req.body;
    console.log("🔍 LOGIN ATTEMPT:", email);
    //check for if user is available
    const existingUser = await UserModel.findOne({ email: { $regex: new RegExp(`^${req.body.email}$`, 'i') }})
     console.log("🔍 USER FOUND:", !!existingUser, existingUser?.email);
    if (!existingUser){
        return res.status(401).json({message:'User doesnt exist. Sign up'})
    }
    try{
    const dehashPassword = await bcrypt.compare(password, existingUser.password )
     if (!dehashPassword) {
      return res.status(401).json({ message: 'Invalid credentials. Please try again.' });
    }

    //if no issues/ all entires are good
    const userPayload = {id:existingUser._id, email:existingUser.email, name:existingUser.name}
    const jwt_token = jwt.sign(userPayload, JWT_SECRETKEY, {expiresIn:'1h'})
    

    return res.status(200).json({
      message:'welcome to home page', 
      token: jwt_token,
      user:  {
        id: existingUser._id,
        email: existingUser.email,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        phoneCodes: existingUser.phoneCodes,
        phoneNumber: existingUser.phonenumber,
        addressLine1: existingUser.addressLine1,
        addressLine2:existingUser.addressLine2,
        city:existingUser.city ,
        state:existingUser.state ,
        country:existingUser.country ,
        zipCode: existingUser.zipCode,
    }
  })}
   catch(err){
    console.error('Login error', err.message)
    return res.status(500).json({message:'Server error. Try again later'})
      }
    })

    export default loginRouter;