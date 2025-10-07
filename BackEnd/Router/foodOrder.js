const express = require("express");
const router = express.Router();

const FoodOrder = require("../Config/dbConfig");


//  POST Route
router.post("/", async (req, res) => {
    try {
        const newOrder = new FoodOrder(req.body);
        await newOrder.save();
        res.send("Food order inserted successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error inserting food order");
    }
});

module.exports = router;
