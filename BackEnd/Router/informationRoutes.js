import express from "express";
import upload from "../Middleware/multer.js";
import { addNewFood, createInformation } from "../controller/informationController.js";

const router = express.Router();

router.post("/addNewFood", addNewFood);
router.post("/", upload.single("image"), createInformation);
router.post("/addNewFood", upload.none(), addNewFood);

// router.get("/:type", getInformationByType);



export default router;  
