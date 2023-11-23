const User = require("../models/User")
const jwt = require("jsonwebtoken")

const isAuth  = async(req,res,next) =>{
    try {
        const token = req.headers["authorization"]
        if (!token){
            return res.status(400).send({msg : "not authorized"})
        }
        const decoded = jwt.verify(token , process.env.SCRT_KEY)
        const foundUser = await User.findOne({_id : decoded.id})

        if (!foundUser) {
            return res.status(400).send({msg : "not authorized 1"})
        }
        req.user = foundUser
        
        next()
    } catch (error) {
        return res.status(400).send({msg : "not authorized 3"})
    }
}

module.exports = isAuth ;