const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");


router.get("/", (req, res)=>{
    let error = req.flash("error");
    res.render("index",{error});
});


module.exports= router;