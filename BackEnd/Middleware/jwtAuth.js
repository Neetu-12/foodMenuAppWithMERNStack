import jwt from "jsonwebtoken";
import User from "../models/User.js"; // assuming you have a User model

const JWT_SECRET = "nklsajfajjslj"; // You can store this in an environment variable

// Function to create access token
export const accessToken = (data) => {
  const token = jwt.sign(data, JWT_SECRET);
  console.log(token, "generated token!");

  return token;
};

// Middleware to verify user token
export const userVerifyToken = async (req, res, next) => {
  // accessToken()
  try {
    // console.log("Headers:", req.headers);
    // console.log("Cookies:", req.cookies);

    const token =
      req.headers.signtoken ||                            // custom header
      req.headers.authorization?.split(" ")[1] ||         // Bearer token
      req.cookies?.signtoken;

    console.log(token);
    console.log(req.headers.authorization);
    console.log(req.cookies.signtoken);
    // cookie


    if (!token) {
      return res.status(401).send("Token missing or expired.");
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Find user by decoded id
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).send("User not found.");
    }

    req.userData = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send("Invalid or expired token.");
  }
};
