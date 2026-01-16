import express from 'express'
import mongoose from 'mongoose'
import axios from 'axios'
import registerRouter from './register.js' 
import loginRouter from './login.js'
import authRouter from '../middlewares/auth.js'
import updateUserRouter from './updateUser.js'
import UserModel from '../models/users.js'
import dotenv from 'dotenv'
//my middlewares
import cors from "cors";
dotenv.config({ path: './config/.env' })


const app = express();
 app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(cors({ origin: "*" }));


app.use('/api', registerRouter)
app.use('/api', loginRouter)
app.use('/uploads', express.static('uploads'));

app.get('/api/users/:id/profile-pic', async (req, res) => {
  const user = await UserModel.findById(req.params.id).select('profilePicture'); // <- profilePicture
  console.log('User profilePicture:', user?.profilePicture); 
  
  if (!user || !user.profilePicture?.data) {
    return res.status(404).send("No image found");
  }
  res.set("Content-Type", user.profilePicture.contentType);
  res.send(user.profilePicture.data);
});


app.use('/api/update', authRouter, updateUserRouter)

//mongoose.connect('URL', {useunifiedtopolgy:'', usenewurlparser:''}).then()
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('database connected '))
.catch((err)=>console.error(`error connecting database ${err}`))

//my basic routes
app.get('/', (req,res)=>{
    res.json({message:'server is running now'})
})
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error("[MULTER ERROR]:", err);
    return res.status(400).json({ message: "Multer error: " + err.message });
  }
  next(err);
});


// app.listen(process.env.PORT || 5000, () => {
//   console.log(`Server running on port ${process.env.PORT || 5000}`);
// });
export default app;