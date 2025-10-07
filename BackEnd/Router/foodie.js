const express = require("express");
const router = express.Router();

const db = require("../Config/dbConfig");

router.get("/", (req, res) => {
    res.send("Menus are ok !")
});

module.exports = router;
