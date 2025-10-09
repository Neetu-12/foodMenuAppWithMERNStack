import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import cors from "cors";
import userRouter from "./Router/userRouter.js";

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8000;

import db from "./Config/dbConfig.js";
db("connected");

app.use("/", userRouter);

// const menu = require("./Router/menu")
// app.use("/menus", menu)
 
// const info = require("./Router/information")
// app.use("/information", info)
// const jwt = require("./Middleware/jwt");
// app.use("/",jwt)

// const foodie = require("./Router/foodie")
// app.use("/foodie", foodie)

// const foodOrder = require("./Router/foodOrder")
// app.use("/order", foodOrder)


app.listen(PORT, () => {
    console.log(`Running server at ${PORT} port`);
});