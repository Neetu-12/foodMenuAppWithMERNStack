const express = require("express");
const router = express.Router();
const uploade = require("../Middleware/multer")
const cloudinary = require("../Middleware/cloudnery");
const knex = require("../Config/dbConfig")

router.post("/", uploade.single("image"), async (req, res) => {
    try {
        if (req.file.path) {
            let img = await cloudinary.uploader.upload(req.file.path);
            let img1 = img.secure_url;
            await knex("Foodstorage").insert({ ...req.body, imageURL: img1 });
            res.send("Inserted!")
        }
        else {
            res.send("The file path is not correct kindly check it.")
        }

    } catch (error) {
        console.log(error);
        res.send("Something went wrong.")
    }
})


router.get('/:foodtype', async (req, res) => {
    // console.log(req.params.foodtype);
    let data = await knex('foodstorage').where({ foodtype: req.params.foodtype })
    res.send(data);
})

module.exports = router;
