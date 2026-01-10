import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";



app.use(cookieParser());
import userRouter from "./Router/userRoutes.js";
import informationRouter from "./Router/informationRoutes.js";
import foodOrderRouter from "./Router/foodorderRoutes.js";
import foodstorageRoutes from "./Router/foodstorageRoutes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 4000;

import db from "./Config/dbConfig.js";
db("connected");

app.use("/", userRouter);
app.use("/", informationRouter);
app.use("/", foodOrderRouter);
app.use("/", foodstorageRoutes);


app.get('/', (req, res) => {
    res.status(200).json({message:"Welcome to food menu app...."})
});


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