const express = require("express");
const router = new express.Router();
const User = require("../models/user");


//create new user

router.post("/user",async(req,res)=>{
    try{
        // console.log(req.body);
        const { name, username, password } = req.body;

        if(!name || !username || !password)
        {
            return res.status(204).json({
                error: "Please fill all the fields"
            })
        }
        else
        {
            const user = new User({
                name:name,
                username:username,
                password:password,
            });
            
            const userRegistered = await user.save();
            if(userRegistered)
            {
                return res.status(201).json({
                    message: "user registered successfully"
                })
            }
            else
            {
                return res.status(500).json({
                    error: "failed to register"
                })
            }
        }
    }
    catch(e){
        res.status(400).send(e);
    }
})


//read users
router.get("/users",async(req,res)=>{
    try{
        const usersData = await User.find();
        res.status(201).send(usersData);
    }
    catch(e){
        res.status(400).send(e);
    }
})


// for individual student using id
router.get("/user/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const userData = await User.findById({_id:id});
        if(!userData)
        {
            return res.status(404).send();
        }
        else{
            res.send(userData);
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})


//update user by id
router.put("/user/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const userUpdate = {
            name:req.body.name,
            username:req.body.username
        }
        const updateData = await User.findByIdAndUpdate(_id, userUpdate, {
            new:true
        });
        res.send(updateData);
    }
    catch(e){
        res.status(400).send(e);
    }
})



//delete user by id
router.delete("/user/:id",async(req,res)=>{
    try{
        const deleteData = await User.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(deleteData);
    }
    catch(e){
        res.status(500).send(e);
    }
})


module.exports = router; 