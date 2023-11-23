const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


exports.register = async (req,res) =>{
try {
    const {firstName , name , email , password} = req.body
    const foundUser = await User.findOne({email})
    if (foundUser) {
        return res.status(400).send({msg: "email already in use"})
    }
    const saltRounds = 10 ;
    const hashedPassword = await bcrypt.hash(password , saltRounds)
    const newUser = new User ({...req.body})
    newUser.password = hashedPassword;
    await newUser.save()
    const token = jwt.sign({
        id : newUser._id
    },process.env.SCRT_KEY, {expiresIn : "240h"})


return  res.status(200).send({msg : "welcome to our website",user : newUser})
} catch (error) {
    res.status(400).send({msg : "try again"  })
     
}

}



exports.login = async (req,res) => {
    try {
        const {email,password} = req.body

        const foundUser = await User.findOne({email})

        if (!foundUser){
            res.status(400).send({msg : "user not found ... register or try again"})
        }
        const checkPassword = await bcrypt.compare(password , foundUser.password)

        if (!checkPassword) {
        return res.status(400).send({msg : "please check your password"})
        }


        const token = jwt.sign({
            id : foundUser._id
        },process.env.SCRT_KEY , {expiresIn : "240h"})

        return res.status(200).send({msg : "welcome back" , user:foundUser , token})
    } catch (error) {
        res.status(400).send({msg : "try again"})
    }
}