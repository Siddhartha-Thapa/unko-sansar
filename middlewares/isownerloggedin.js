
const jwt = require("jsonwebtoken");
const usermodel = require("../models/user");

module.exports = async function(req, res , next) {
    if(!req.cookies.token){
        req.flash("error","You need to login first")
        res.redirect("/owners/login");
    }
    try{
        let decoded = jwt.verify(req.cookies.token , process.env.JWT_KEY);
        let owner = await usermodel.findOne({email: decoded.email}).select("-password");
        req.owner = owner;
        next();
    }catch(err){
        req.flash("error","Something went wrong");
        res.redirect("/login");
    }
};
//comments
