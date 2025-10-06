const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const flash = require('connect-flash')
const productmodel = require("../models/product");

router.get("/", (req, res)=>{
    let error = req.flash("error");
    res.render("index",{error});
});
router.get("/users/login",isLoggedIn, async(req,res)=>{
    let products = productmodel.find();
    res.render("login", {products});
})
module.exports= router;