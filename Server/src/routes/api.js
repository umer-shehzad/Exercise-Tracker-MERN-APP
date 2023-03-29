const express = require("express");
const router = express.Router();
require("../db/conn");
const Register = require("../models/register");
router.post("/registration", async (req, res) => {
    const { username, email, password, confirmpassword } = req.body; //object destructing//
    if (!username || !email || !password || !confirmpassword) {
      res.status(422).json({
        //semantic error(422)
        msg: "please enter all fields",
      });
    }
    try {
      const userExist = await Register.findOne({
        email: email,
      });
      if (userExist) {
        return res.status(422).json({
          msg: "user already exists",
        });
      } else if (password !== confirmpassword) {
        return res.status(422).json({
          msg: "password not  match",
        });
      } else {
        const newUser = new Register({
          username,
          email,
          password,
          confirmpassword,
        });
        await newUser.save();
        res.status(500).json({
          msg: "user registered!!!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
module.exports= router;