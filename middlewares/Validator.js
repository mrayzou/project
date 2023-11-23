const { check, validationResult } = require('express-validator');

exports.registerValidator = () =>[
    check("firstName","please entre your firstname").not().isEmpty(),
    check("name","please entre your name").not().isEmpty(),
    check("email","please enter a valid email").isEmail(),
    check("password",'please enter a valid password').isLength({min:6})
]

exports.loginValidator = () =>[
    check("email","please enter a valid email").isEmail(),
    check("password","please enter a valid passwod").isLength({min:6})
]

exports.validation =(req,res,next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    next();
}