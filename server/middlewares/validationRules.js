import { body } from "express-validator";

export const userValidationRules = [
  body("firstName")
    .notEmpty().withMessage("First name is required").bail()
    .isAlpha().withMessage("First name must contain only letters").bail()
    .isLength({ min: 2 }).withMessage("First name must be at least 2 characters"),

  body("lastName")
    .notEmpty().withMessage("Last name is required").bail()
    .isAlpha().withMessage("Last name must contain only letters").bail()
    .isLength({ min: 2 }).withMessage("Last name must be at least 2 characters"),

  body("email")
    .notEmpty().withMessage("Email is required").bail()
    .isEmail().withMessage("Invalid email format"),

  body("password")
    .notEmpty().withMessage("Password is required").bail()
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),

  body("phonenumber")
    .notEmpty().withMessage("Phone number is required").bail()
    .isMobilePhone().withMessage("Invalid phone number"),

  body("phoneCodes")
    .notEmpty().withMessage("Phone code is required").bail(),

  body("addressLine1")
  .if((value, {req})=> !req.body.pickupOffice)   //  if pickupOffice is not set, then run the ones under it
    .notEmpty().withMessage("Address Line 1 is required").bail()
    .isLength({ min: 5 }).withMessage("Address Line 1 must be at least 5 characters"),

  body("addressLine2")
    .optional()
    .isLength({ min: 5 }).withMessage("Address Line 2 must be at least 5 characters"),

  body("country")
    .notEmpty().withMessage("Country is required").bail()
    .isAlpha().withMessage("Country must contain only letters"),

  body("state")
    .notEmpty().withMessage("State is required").bail()
    .isLength({ min: 2 }).withMessage("State must be at least 2 characters"),

  body("city")
    .notEmpty().withMessage("City is required").bail()
    .isLength({ min: 2 }).withMessage("City must be at least 2 characters"),

  body("zipCode")
    .notEmpty().withMessage("Zip code is required").bail()
    .isPostalCode("any").withMessage("Invalid zip code"),

  body("pickupOffice")
    .if((value, {req})=> !req.body.addressLine1)  
    .notEmpty().withMessage("Pickup office is required").bail()
    .isLength({ min: 2 }).withMessage("Pickup office must be at least 2 characters"),
];


