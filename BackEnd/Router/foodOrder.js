const express = require("express");
const router = express.Router();

const knex = require("../Config/dbConfig");

router.post("/foodOrder", async (req, res) => {
    await knex("foodOrder").insert(req.body);
    res.send("foodOrder are inserted !")
});

module.exports = router;
