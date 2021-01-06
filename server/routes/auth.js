const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')

router.get('/protected',requireLogin,(req,res)=>{
    res.send("Hello User");
})

//SignUp Route
router.post('/signup',(req,res)=>{
    const {name,email,password}= req.body;
    if(!email || !password || !name){
       return res.status(422).json({error: "Please fill all the fields"})
    }
    //res.json({message:"Successfuly posted"})
    User.findOne({ email: email })
      .then((savedUser) => {
        if (savedUser) {
          return res
            .status(422)
            .json({ error: "User already exists with this email" });
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword, 333
                name,
            });

            user.save()
            .then((user) => {
                 res.json({ message: "Saved successfully" });
            })
            .catch((err) => {
                console.log(err);
            });
        })

  
      })
      .catch((err) => {
        console.log(err);
      });
})

//SignIn Route
router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"Please add Email/Password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            res.status(422).json({error:"Invalid Email/Password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"successfully signed in"})
                const token = jwt.sign({id:savedUser._id}, JWT_SECRET)
                res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid Email/Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router;