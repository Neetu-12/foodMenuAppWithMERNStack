import express from "express";
import { getFoodtype } from "../controller/foodStorageController.js";
// import { getFoodtype } from "../controller/foodStorageController.js";

const router = express.Router();


router.get("/getfoodtypes/:foodtype", getFoodtype);

export default router;