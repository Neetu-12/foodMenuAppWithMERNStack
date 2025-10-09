import bcrypt from "bcrypt";
import User from "../models/User.js";

// Register function
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user  
    console.log({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });
    
    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    // Success response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};


// Login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️ Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 2️ Find user and include password field
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }
    console.log(user.password, "login");
    
    // 3️ Compare entered password with stored hash
    console.log({password,user : user.password});

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password", success: false });
    }

    // 4️ Generate JWT token
    // const token = user.getSignedJwtToken();

    // 5️ Success response
    res.status(200).json({
      message: "Login successful",
      success: true,
    //   token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};


