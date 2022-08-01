const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")

// model
const User = require("../../models/User")

// register api endpoint

router.post('/register', (req,res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    // already register user check
    User.findOne({
        email: req.body.email
    }).then((user) => {
        if(user){
            return res.status(400).json({
                email: "Email already exits"
            });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
        }
    })
})