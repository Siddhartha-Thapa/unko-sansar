const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const flash = require('connect-flash')
const productmodel = require("../models/product");

router.get("/", (req, res)=>{
    let error = req.flash("error");
    let success = req.flash("success");
    res.render("index",{error, success});
});
router.get("/users/login",isLoggedIn, async(req,res)=>{
    let products =await productmodel.find();
    res.render("login", {products});
})
module.exports= router;