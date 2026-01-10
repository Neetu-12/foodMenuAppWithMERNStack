import express from "express";
import { createFoodOrder } from "../controller/foodOrderController.js";

const router = express.Router();

// use the controller function
router.post("/foodorder", createFoodOrder);

export default router;
