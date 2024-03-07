const bcrypt = require("bcrypt");

let hashPassWord = async (req, res, next)=>{
    try {
        let salt = await bcrypt.hash(req.body.password,10);
        req.body.password = salt
        next()
    } catch (error) {
        res.send(error)
    }
}

module.exports = hashPassWord