const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const flash = require('connect-flash')
const productmodel = require("../models/product");
const usermodel = require("../models/user");

router.get("/", (req, res)=>{
    let error = req.flash("error");
    let success = req.flash("success");
    res.render("index",{error, success});
});
router.get("/users/login",isLoggedIn, async(req,res)=>{
    let products =await productmodel.find();
    let success = req.flash("success");
    res.render("login", {success, products});
});
router.get("/addtocart/:id",isLoggedIn, async(req,res)=>{
    let user =await usermodel.findOne({email: req.user.email});
    let products =await productmodel.find();
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success","Added to cart successfully");
    res.redirect("/users/login");
});
module.exports= router;