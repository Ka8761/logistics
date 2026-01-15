import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, "First name is required"], trim: true },
    lastName: { type: String, required: [true, "Last name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: { type: String, required: [true, "Password is required"], minlength: 6 },

    phoneCodes: { type: Number, required: true },
    phonenumber: { type: Number, required: true },

    addressLine1: { type: String }, // only required if using address
    addressLine2: { type: String }, // always optional
    country: { type: String, required: true },
    state: { type: String },
    city: { type: String, required: true },
    zipCode: { type: String },

    pickupOffice: { type: String }, // only required if using pickup
  // 🔹 Optional fields for profile updates
    paymentCurrency: { type: String, default: null },
    timeZone: { type: String, default: null },
     profilePic: {
  data: { type: Buffer, required: false },
  contentType: { type: String, required: false },
},
  
  },
  { timestamps: true }
);

// Cross-field validation
userSchema.pre("validate", function (next) {
  if (this.addressLine1 === "") this.addressLine1 = undefined;
  if (this.addressLine2 === "") this.addressLine2 = undefined;
  if (this.pickupOffice === "") this.pickupOffice = undefined;

  const hasAddress = !!this.addressLine1;
  const hasPickup = !!this.pickupOffice;

  if (!hasAddress && !hasPickup) {
    this.invalidate("addressLine1", "Address is required if no pickup office is provided");
    this.invalidate("pickupOffice", "Pickup office is required if no address is provided");
  }

  if (hasAddress && hasPickup) {
    this.invalidate("pickupOffice", "Choose either address OR pickup office, not both");
  }

  next();
});

export default mongoose.model("User", userSchema);
