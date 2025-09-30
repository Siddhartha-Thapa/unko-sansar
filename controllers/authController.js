const usermodel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken");


module.exports.registerUser =async function(req,res){
    let{fullname , email , password}= req.body;
    let user = await usermodel.findOne({email: email});
    if(user)return res.status(401).send("User already registered, please login");
    try {
        bcrypt.genSalt(10,(err,salt)=>{
            console.log(salt);
            bcrypt.hash(password , salt, async(err, hash)=>{
                console.log(hash);
                if(err){return res.status(501).send(err.message);}
                else{
                    let user =  await usermodel.create({
                    fullname,
                    email,
                    password:hash,
                    });
                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("user created successfully");
                }
            })         
        })
        } catch (error) {
                    res.send(error.message);
                }
}

module.exports.loginUser = async function (req, res){
    let {email , password} = req.body;
    let user =await usermodel.findOne({email:email});
    if(!user){
        return res.status(400).send("Email or password incorrect");
    }
    bcrypt.compare(password, user.password , function(err, result){
        if(result){
        let token = generateToken(user);
        res.cookie("token", token);
        res.send("you can log in");
        }
        else{
            res.send("Invalid Email or Password");
        }
})
}

module.exports.logoutUser = function(req,res){
    res.cookie("token","");
    res.redirect("/");
}