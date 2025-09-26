const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    paaaword:String,
    cart:{
        type: Array,
        default:[]
    },
    isadmin: Boolean,
    orders:
        {
            type:Array,
            default:[]
        }
    ,
    contact: Number,
    picture: String
})

module.exports= mongoose.model("user", userSchema);