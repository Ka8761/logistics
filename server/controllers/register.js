import express from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/users.js";
import { body, validationResult } from "express-validator";
import {userValidationRules} from "../middlewares/validationRules.js";
const registerRouter = express.Router();

registerRouter.post(
  "/register",
  userValidationRules,

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { //if its is NOT true that errorsisempty....then......
      return res.status(401).json({ errors: errors.array() }); //..then return the errors in an arrary form
    }

    const {
      firstName,
      lastName,
      email,
      password,
      phonenumber,
      phoneCodes,
      addressLine1,
      addressLine2,
      country,
      state,
      city,
      zipCode,
      pickupOffice,
    } = req.body;

    try {
      //checking if user exists
      const existingUser = await UserModel.findOne({
        email: email.toLowerCase(),
      });
      if (existingUser) {
        return res.status(409).json({ message: "user already exists" });
      }

      //checking if password match
      const passwordHashed = await bcrypt.hash(password, 10);

      const newUser = {
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: passwordHashed,
        phonenumber,
        phoneCodes,
        addressLine1,
        addressLine2,
        country,
        state,
        city,
        zipCode,
        pickupOffice,
      };

      await UserModel.create(newUser);

      return res.status(201).json({
        message: "user successfully registered",
        user: {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error("Error registering user:", err);
      return res
        .status(500)
        .json({ message: "Server error. Try again later." });
    }
  }
);

export default registerRouter;
