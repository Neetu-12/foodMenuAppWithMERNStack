import express from "express";
import { login, register } from "../controller/user.js"; // ✅ use import instead of require

const router = express.Router();

// register route
router.post("/register", register);
// Login route
router.get("/login", login);

export default router;
