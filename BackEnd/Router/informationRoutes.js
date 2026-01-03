import express from "express";
import upload from "../Middleware/multer.js";
import { createInformation, getInformationByType } from "../controller/informationController.js";

const router = express.Router();

router.post("/", upload.single("image"), createInformation);
router.get("/:type", getInformationByType);

export default router;
