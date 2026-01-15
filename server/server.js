import express from 'express'
import mongoose from 'mongoose'
import axios from 'axios'
import registerRouter from './controllers/register.js' 
import loginRouter from './controllers/login.js'
import authRouter from './middlewares/auth.js'
import updateUserRouter from './controllers/updateUser.js'

//my env variables
import dotenv from 'dotenv'

dotenv.config({ path: './config/.env' })

const app = express();

//my middlewares
import cors from "cors";
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use('/api', registerRouter)
app.use('/api', loginRouter)
app.use('/api/update', authRouter, updateUserRouter)

//mongoose.connect('URL', {useunifiedtopolgy:'', usenewurlparser:''}).then()
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('database connected '))
.catch((err)=>console.error(`error connecting database ${err}`))

//my basic routes
app.get('/', (req,res)=>{
    res.json({message:'server is running now'})
})
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
