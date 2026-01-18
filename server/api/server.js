import express from 'express'
import mongoose from 'mongoose'
import registerRouter from './register.js' 
import loginRouter from './login.js'
import authRouter from '../middlewares/auth.js'
import updateUserRouter from './updateUser.js'
import UserModel from '../models/users.js'
import dotenv from 'dotenv'
//my middlewares
//vercel deploy --prod --force
import cors from "cors";
import multer from 'multer';
dotenv.config({ path: './config/.env' })

const app = express();

//CORS FIRST
app.use(cors({
  origin:['http://localhost:3001', 'https://logistics-cargoextra.vercel.app'],
  credentials: true
}));

// const allowedOriginlink = 'https://logistics-cargoextra.vercel.app';

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', allowedOriginlink);
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(200);
//   }
//   next();
// });

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 40000,  // 30s timeout for Vercel
  socketTimeoutMS: 55000,
  family: 4,  // Force IPv4 (Vercel IPv6 issues sometimes)
})
.then(() => console.log('database connected'))
.catch((err) => {
  console.error('MongoDB connection error on Vercel:', err.message);
  console.error('Full error:', err);
});

app.use('/api', registerRouter)
app.use('/api/auth', loginRouter)
app.use('/uploads', express.static('uploads')); 
app.get('/*splat', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

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

//my basic routes
// app.use(cors({
//   origin: ['https://logistics-cargoextra.vercel.app'], 
//   methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'], 
//   credentials: true, 
//   allowedHeaders: ['Content-Type', 'Authorization', 'authheader']  
// }));
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;