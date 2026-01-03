import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";



app.use(cookieParser());
import userRouter from "./Router/userRoutes.js";

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000;

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