const express = require('express');
const router = express.Router();
const ownermodel = require('../models/owners');


console.log(process.env.NODE_ENV);
router.get('/',async(req,res)=>{
    res.send("check");
});



module.exports = router;