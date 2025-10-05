import express from "express";
import { body, validationResult } from "express-validator";
import UserModel from "../models/users.js";
import multer from 'multer'

const updateUserRouter = express.Router();


// Multer setup (store file in memory, not disk)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Example validation (all optional since it's update)
const updateValidationRules = [
  body("email").optional().isEmail().withMessage("Invalid email"),
  body("phoneNumber").optional().isNumeric().withMessage("Phone must be numeric"),
  body("phoneCodes").optional().isString(),
  body("paymentCurrency").optional().isString(),
  body("timeZone").optional().isString(),
];

updateUserRouter.patch("/:id", updateValidationRules,  upload.single("profileImage"),
  async (req, res) => {
  console.log('updaterouting')
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors)
    return res.status(400).json({ errors: errors.array() });
  }

  try {
      const userId = req.params.id;

      // Build update object - EXCLUDE imagePreview
      const { imagePreview, ...updateData } = req.body; // <-- ADD THIS LINE

      // If image uploaded, attach as buffer
      if (req.file) {
        updateData.profilePic = {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        };
      }

      // Update user in MongoDB
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { $set: updateData },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // Don't send profilePic buffer back in response
      const userResponse = updatedUser.toObject();
      delete userResponse.profilePic; // <-- ADD THIS LINE

      res.status(200).json({
        message: "Profile updated successfully",
        user: userResponse
      });

    } catch (err) {
      console.error("Update error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);


updateUserRouter.get("/:id/profile-pic", async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (!user || !user.profilePic?.data) {
    return res.status(404).send("No image found");
  }
  res.set("Content-Type", user.profilePic.contentType);
  res.send(user.profilePic.data);
});


export default updateUserRouter;