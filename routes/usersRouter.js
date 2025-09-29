const express = require('express');
const router= express.Router();
const usermodel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");

router.get('/',async(req,res)=>{
    res.send("its working");
});

router.post("/register", (req,res)=>{
    let{fullname , email , password}= req.body;
    try {
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password , salt, async(err, hash)=>{
                if(err){return res.status(501).send(err.message);}
                else{
                    let user =  await usermodel.create({
                        fullname,
                        email,
                        password:hash,
                    });
                   
                    let token = jwt.sign({email, id:user._id}, "secretkey");
                    res.cookie("token", token);
                    res.send("user created successfully");
                }
            })
        
        })
    } catch (error) {
        res.send(error.message);
    }
})
module.exports = router;