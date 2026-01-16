import express from "express";
import { body, validationResult } from "express-validator";
import UserModel from "../models/users.js";
import multer from 'multer'

const updateUserRouter = express.Router();
const User = UserModel;

// configure storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),  // create this folder!
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

const storage = multer.memoryStorage();  
const upload = multer({ storage });

const updateValidationRules = [
  body("email").optional().isEmail().withMessage("Invalid email"),
  body("phoneNumber").optional().isNumeric().withMessage("Phone must be numeric"),
  body("phoneCodes").optional().isString(),
  body("paymentCurrency").optional().isString(),
  body("timeZone").optional().isString(),
  body("imagePreview").optional(),
];

updateUserRouter.patch('/:id', upload.single('profileImage'), async (req, res) => {
  try {
    console.log("[UPDATE ROUTE] Received request");
    console.log("[UPDATE ROUTE] Headers:", req.headers);
    console.log("[UPDATE ROUTE] req.user:", req.user);           // should show decoded JWT
    console.log("[UPDATE ROUTE] req.body:", req.body);           // should show text fields
    console.log("[UPDATE ROUTE] req.file:", req.file);           // should show uploaded file info
    console.log("[UPDATE ROUTE] req.files:", req.files);         // if multiple files

    const { email, phoneCodes, phoneNumber, paymentCurrency, timeZone } = req.body; 
    const profileImage = req.file; // multer puts the file info here
    console.log("[UPDATE ROUTE] profileImage:", profileImage);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        email,
        phoneCodes,
        phoneNumber,
        paymentCurrency,
        timeZone,
        profilePicture: req.file ? {
  data: req.file.buffer,      
  contentType: req.file.mimetype  
} : undefined,

      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: updatedUser });

  } catch (error) {
    console.error("[UPDATE ROUTE ERROR]:", error);
    res.status(500).json({ message: "Server error during profile update", error: error.message });
  }});



  
// updateUserRouter.get("/users/:id/profile-pic", (req, res, next) => {
//   // Skip auth check – just proceed
//   console.log("[PROFILE-PIC GET] Public route accessed for user ID:", req.params.id);
//   next();
// }, async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.params.id).select('profilePic');
//     if (!user || !user.profilePic?.data) {
//       return res.status(404).send("No image found");
//     }
//     res.set("Content-Type", user.profilePic.contentType);
//     res.send(user.profilePic.data);
//   } catch (err) {
//     console.error("[PROFILE-PIC GET ERROR]:", err);
//     res.status(500).send("Server error loading profile picture");
//   }
// });

export default updateUserRouter;