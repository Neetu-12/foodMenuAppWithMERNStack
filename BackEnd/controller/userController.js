import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { accessToken } from "../Middleware/jwtAuth.js";

// Register function
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    // console.log(existingUser, 'email existing');

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user      
    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    // Success response
    res.status(201).json({
      message: "User registered successfully",
      newUser
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};


// Login function;

export const login = async (req, res) => {
  try {
    console.log(req.body, "login page");

    const { email, password } = req.body;

    
    // 1️ Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 2️ Find user (include password for comparison)
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // 3️ Compare entered password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password", success: false });
    }

    // 4️ Generate JWT token
    
    const token = accessToken({ id: user._id });
    console.log({ id: user._id }, "{ id: user._id }", token,"token............");

    // Send only one response
    return res.status(200).json({
      message: "Login successful",
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("❌ Login Error:", error);
    return res.status(500).json({ message: "Login failed", error: error.message });
  }
};

export const userAuth = async (req, res) => {
  try {
    // req.userData is already set in the middleware (userVerifyToken)
    const user = req.userData;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Token verified successfully",
      user,
    });
  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};



