import express from "express";
import { login, register, userAuth } from "../controller/userController.js"; //  use import instead of require
import { userVerifyToken } from "../Middleware/jwtAuth.js";

const router = express.Router();

// register route
router.post("/register", register);

// Login route
router.post("/login", login);

router.get("/auth",  userAuth);

export default router;
