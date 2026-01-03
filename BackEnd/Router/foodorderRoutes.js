import express from "express";
import { createFoodOrder } from "../controller/foodOrderController.js";

const router = express.Router();

// use the controller function
router.post("/", createFoodOrder);

export default router;
