const express = require("express");
// const nodemailer = require("nodemailer");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const multer = require("multer");
const env = require("dotenv").config();
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/auth.middelware");

const formater = (str) => str.replaceAll(" ", "-");
const Users = require("../models/Users");

//checks for validToken
router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

// SIGN UP
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const check = await Users.findOne({ where: { email: email } });
  console.log(check);
  if (!check) {
    bcrypt.hash(password, 8).then((hash) => {
      const user = Users.create({
        email: email,
        password: hash,
      });
      const token = sign(
        { email: user.email, id: user.id },
        process.env.NODE_ENV_SECRET
      );
      res.json({ token: token, user: { email: email } });
    });
  } else {
    res.json("Email already exists");
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      res.json({ error: "This email doesn't has a linked account" });
      return;
    }
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "usuario y/o contraseña incorrecto" });
        return;
      }
      const token = sign(
        { email: user.email, id: user.id },
        process.env.NODE_ENV_SECRET
      );
      res.json({ status: "OK", token: token, user: user });
    });
  } catch (error) {
    console.error(error);
  }
});

//edit user
router.put("/edit_user", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    newPassword,
    phone,
    address,
    zip,
    city,
    state,
    country,
    id,
  } = req.body;
  const user = await Users.findOne({ where: { id: id } });
  if (!user) {
    res.json({ Error: "unable to find the user" });
    return;
  }
  const emailCheck = await Users.findOne({ where: { email: email } });
  if (user.email !== email && emailCheck) {
    res.json({ error: "Email address already in use" });
    return;
  }
  try {
    if (password !== "") {
      bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          res.json({ Error: "password doesn't match" });
          return;
        }
      });
    }
   await Users.update(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        zip: zip,
        city: city,
        state: state,
        country: country,
      },
      { where: { id: id } }
    );
      if (newPassword.length>5){

        bcrypt.hash(newPassword, 8).then((hash) => {
          Users.update({ password: hash }, { where: { id: id } });
        });
      }
    
      const updatedUser = await Users.findOne({ where: { id: id } });

    res.json({ user: updatedUser, Status: "OK" });
    return;
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
