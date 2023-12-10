const express = require('express');
const Router = express.Router();
const Users = require('../models/Users');
const { body, validationResult } = require('express-validator');

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const jwtSecret = "mycollegenameispoornimacollengeofengineering$#"

// sign up user  

Router.post ("/createusers",
body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('location').isLength({ min: 10 }),
body('password',"incorrect password").isLength({ min: 5 }),

async (req ,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password , salt);

    try {
      await  Users.create({
        name: req.body.name,
        password: secPassword ,
        email: req.body.email,
        location: req.body.location
          
        });

        res.json({success : true});
        
    } catch (error) {
         console.log(error);
         res.json({success : false});
        
    }
})



// login user 

Router.post ("/loginusers",
body('email').isEmail(),
body('password',"incorrect password").isLength({ min: 5 }),

async (req ,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    let email = req.body.email;
    try {

      let userdata = await  Users.findOne({ email });
      if(!userdata){
        return res.status(400).json({ errors: "can`t find account" });
      }

      const passwordCopmare = await bcrypt.compare(req.body.password ,userdata.password);
      if(!passwordCopmare ){
        return res.status(400).json({ errors: "incorrect password" });
      }

      const data = {
        user:{
          id:userdata.id
        }
      }

      const authToken = jwt.sign(data,jwtSecret);
        return res.json({success : true,authToken:authToken});
        
    } catch (error) {
         console.log(error);
         res.json({success : false});
        
    }
})

module.exports = Router;



