import express from "express";
const router = express.Router();


router.get("/", (req, res) => {
    res.send("Menus are ok !")
});

module.exports = router;
