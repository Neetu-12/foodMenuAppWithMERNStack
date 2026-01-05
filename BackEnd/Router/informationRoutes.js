import express from "express";
import upload from "../Middleware/multer.js";
import { addNewFood, createInformation, getInformationByType } from "../controller/informationController.js";

const router = express.Router();

router.post("/", upload.single("image"), createInformation);
router.get("/:type", getInformationByType);

router.post("/addNewFood", addNewFood);

export default router;  
