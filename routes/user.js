const express = require('express');
const { register, login } = require('../controllers/user');
const isAuth = require('../middlewares/isAuth');
const { validation, registerValidator, loginValidator } = require('../middlewares/Validator');
  const router = express.Router();


router.post("/register",registerValidator(),validation,register)
router.post("/login",loginValidator(),validation,login)


router.get("/current", isAuth , (req,res)=>{
    res.send(req.user)
})




module.exports = router;
