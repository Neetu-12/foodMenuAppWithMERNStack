import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "deliveryBoy", "restaurantOwner"],
      default: "user",
    },
    profileImage: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
  },
  {
    timestamps: true, //  Adds createdAt & updatedAt
  }
);

//
// 🔐 Password Hash Middleware
//
// userSchema.pre("save", async function (next) {
//   // Only hash if password is new or modified
//   if (!this.isModified("password")) return next();

//   const salt = await bcrypt.genSalt(10);
//   let oldpass = this.password;
//   this.password = await bcrypt.hash(this.password, salt);
//   console.log({newPass : this.password, oldpass});
  
//   next();
// });

//
// 🔑 JWT Token Method
//
// userSchema.methods.getSignedJwtToken = function () {
//   return jwt.sign(
//     { id: this._id, role: this.role },
//     process.env.JWT_SECRET,
//     { expiresIn: "7d" }
//   );
// };

//
// 🔎 Password Comparison Method
//
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const User = mongoose.model("User", userSchema); //  singular model name is best practice
export default User;
