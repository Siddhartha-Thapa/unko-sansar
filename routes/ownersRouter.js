const express = require('express');
const router = express.Router();
const ownermodel = require('../models/owners');

if(process.env.NODE_ENV === "development"){
    router.post("/create", async(req,res)=>{

        let owners =await ownermodel.find();
        if(owners.length>0){
            return res.status(503)
            .send("owner limit exceeded!");
        }
        let {fullname, email, password}=req.body;
        let createdOwner = await ownermodel.create({
            fullname,
            email,
            password    
        });
        res.status(201).send(createdOwner);
    })
}
router.get('/admin',async(req,res)=>{
    res.render("createproducts");
});



module.exports = router;