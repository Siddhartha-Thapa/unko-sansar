const usermodel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken");
const productmodel = require("../models/product");


module.exports.registerUser =async function(req,res){
    let{fullname , email , password}= req.body;
    let user = await usermodel.findOne({email: email});
    if(user){
        req.flash("error","User already registered. Please login");
        res.redirect("/");
    }
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
                    let token = generateToken(user);
                    res.cookie("token", token);
                    req.flash("success","User created successfully, Please login");
                    res.redirect("/");
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
    if(user){
        bcrypt.compare(password, user.password ,async function(err, result){
        if(result){
        let token = generateToken(user);
        res.cookie("token", token);
        let success = "";
        let products =await productmodel.find();
        let cartcount = user.cart.length;
        res.render("login",{products ,success,user , cartcount });
        }
        else{
            try{

                req.flash("error","Email or Password incorrect");
                res.redirect("/");
            }
            catch(err){
                res.send(err.message);
            }
        }
        })
    }
    else{

        try{
            req.flash("error","User not registered");
            res.redirect("/");
        }
        catch(err){
            res.send(err.message);
        }
        
    }
}

module.exports.logoutUser = function(req,res){
    res.cookie("token","");
    res.redirect("/");
}
