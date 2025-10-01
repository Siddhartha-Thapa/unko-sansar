const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const flash = require('connect-flash')


router.get("/", (req, res)=>{
    let error = req.flash("error");
    res.render("index",{error});
});


module.exports= router;