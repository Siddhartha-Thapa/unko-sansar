const express = require('express');
const router = express.Router();
const ownermodel = require('../models/owners');
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/generateToken");
const isownerloggedin = require('../middlewares/isownerloggedin');

if(process.env.NODE_ENV === "development"){
    router.post("/create", async(req,res)=>{

        let owners =await ownermodel.find();
        if(owners.length>0){
            return res.status(503)
            .send("owner limit exceeded!");
        }
        let {fullname, email, password}=req.body;
        try{

            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(password,salt, async (err,hash)=>{
                    if(err){
                        res.status(501).send(err.message);
                    }
                    let createdOwner = await ownermodel.create({
                        fullname,
                        email,
                        password: hash
                    });
                    res.status(201).send(createdOwner);
                })
        })
        }
        catch(err){
            res.send(err.message);
        }
    })
}
router.post("/login", async(req,res)=>{
    let{email,password}= req.body;
    let owner =await ownermodel.findOne({email: email});
     if(owner){
        bcrypt.compare(password, owner.password , (err, result)=>{
            if(result){
                let token = generateToken(owner);
                res.cookie("token", token);
                let success = req.flash("success");
                res.render("createproducts",{success});
            }
            else{
                req.flash("error", "Email or Password incorrect");
                let error = req.flash("error");
                res.render("loginowner",{error});
            }
        })
        
     }
});
router.get("/login", (req,res)=>{
    let error = req.flash("error");
    res.render("loginowner",{error});
})
router.get('/admin', isownerloggedin , async(req,res)=>{
    let error = req.flash("error")
    let success = req.flash("success")
    res.render("createproducts",{error, success})
   
});

router.get("/admin/logout", (req,res)=>{
    res.cookie("token","");
    res.redirect("/owners/login");
})

module.exports = router;