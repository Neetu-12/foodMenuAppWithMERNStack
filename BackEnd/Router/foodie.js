const express = require("express");
const router = express.Router();

const knex = require("../Config/dbConfig");

router.get("/foodie",(req,res)=>{
    res.send("Menus are ok !")
});

module.exports = router ;
