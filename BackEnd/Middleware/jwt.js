const jwt = require("jsonwebtoken");
const knex = require("../Config/dbConfig")

const accessToken =  (data)=>{
    const token =  jwt.sign(data,"nklsajfajjslj")
    return token
}

const userVerifytoken = async (req, res, next)=>{
    const token3 =  req.headers.signtoken //cookie
    if(token3){
        let verify =  jwt.verify(token3, "nklsajfajjslj");
        let db = await knex("user").where({id:verify}); //select * from user where id=verify
        req.userData = db 
        next()
    }
    else{
        res.send("Token has expired.")
    }
}

module.exports = {accessToken , userVerifytoken}