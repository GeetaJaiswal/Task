const mongoose = require("mongoose");
const validator = require("validator");

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

//creating new collection
const User = new mongoose.model('User',userSchema);

module.exports = User;