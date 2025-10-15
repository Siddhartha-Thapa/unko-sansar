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
    let user =await usermodel.findOne({email: req.user.email});
    let products =await productmodel.find();
    let success = req.flash("success");
    let cartcount = user.cart.length;
    res.render("login", {success, products, user, cartcount});
});
router.get("/addtocart/:id",isLoggedIn, async(req,res)=>{
    let user =await usermodel.findOne({email: req.user.email});
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success","Added to cart successfully");
    res.redirect("/users/login");
});
router.get("/cart/:id", isLoggedIn , async(req,res)=>{
    let user = await usermodel.findOne({email:req.user.email}).populate("cart");
    let products = await productmodel.find();
    let total = 0;
    await user.cart.forEach(function(item){
       total =  total+(item.price-item.discount+5); 
    });
       res.render("cart",{user, products, total});
       console.log(total);
})
router.post("/cart/remove/:id",isLoggedIn ,async(req,res)=>{
    let user = await usermodel.findOne({email: req.user.email});
    let indextoremove = user.cart.indexOf(req.params.id);
    user.cart.splice(indextoremove,1);
    await user.save();
    res.redirect(`/cart/${user._id}`);
})

module.exports= router;