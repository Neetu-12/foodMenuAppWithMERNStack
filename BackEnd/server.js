const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())
const knex = require("./Config/dbConfig")

const user = require("./Router/user")
app.use("/user",user)

const menu = require("./Router/menu")
app.use("/menus",menu)

const info = require("./Router/information")
app.use("/information",info)
// const jwt = require("./Middleware/jwt");
// app.use("/",jwt)

const foodie = require("./Router/foodie")
app.use("/foodie",foodie)

const foodOrder = require("./Router/foodOrder")
app.use("/order",foodOrder)


app.listen(8000,()=>{
    console.log("Running server at 8000 port");
});