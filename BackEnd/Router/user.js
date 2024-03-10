const express = require("express");
const router = express.Router();

const knex = require("../Config/dbConfig");
const { accessToken, userVerifytoken } = require("../Middleware/jwt");
const bcrypt = require("bcrypt"); 
const hashPassWord = require("../Middleware/hashPassword");

router.post("/register", hashPassWord, async (req, res) => {
    // console.log(req.body);
    try {
        if (req.body.userName != undefined) {
            await knex("user").insert(req.body); 
            res.send("New registration done.")
        }
    } catch (error) {
        // console.log(error);
        res.send("This user is already exist.")
    }
});

router.post("/login", async (req, res) => {
    const detailsChecking = await knex("user").where({ email: req.body.email });
    if (detailsChecking.length > 0) {
        let checkinghashPassword = await bcrypt.compare(req.body.password, detailsChecking[0].password);
        if (checkinghashPassword) {
            let token2 = accessToken(detailsChecking[0].id);
            res.cookie("addCookie", token2);
            res.send({ token: token2, userData: detailsChecking[0] })
        }
        else {
            res.send("somthing went wrong!")
        }
    }
    else {
        res.send("somthing went wrong!")
    }
});

router.get('/auth', userVerifytoken, (req, res) => {
    res.send(req.userData)
});

// jb bhi hme delete update krna hota h , tb tb, hme userDate ki jrurt prti h. ye janne k liye kii us samaya kon sa user login h
router.put("/", userVerifytoken, async (req, res) => {
    console.log(res.userData);
    await knex("user").where({ password: res.userData[0].id }).update({ email: req.body.email });
    res.send("Updated your details.")
});

router.post("/data", async (req, res) => {
    console.log(req.body);
});
module.exports = router;
