const express = require("express");
// const nodemailer = require("nodemailer");
const router = express.Router();
const bcrypt = require("bcryptjs");
const axios = require("axios");
// const multer = require("multer");
const env = require("dotenv").config();
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/auth.middelware");
const cl = require("./../config/cloudinary");
const formater = (str) => str.replaceAll(" ", "-");
const Users = require("../models/Users");

//checks for validToken
router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.post("/imgupload", async (req, res) => {
  cl.uploader
    .upload("")
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));
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

//get users
router.get("/users", async (req, res) => {
  const resp = await Users.findAll();
  res.send(resp);
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
    if (newPassword.length > 5) {
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

//GET STORE
router.get("/getStore", async (req, res) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.printify.com/v1/shops.json",
    headers: {
      "User-Agent": "dev4wear",
      Authorization: `${process.env.NODE_ENV_API}`,
    },
  };

  await axios
    .request(config)
    .then((resp) => {
      res.send(JSON.stringify(resp));
      return;
    })
    .catch((error) => {
      res.send(error);
      return;
    });
});
//ALL PRODUCTS
router.get("/products", async (req, res) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.printify.com/v1/shops/${process.env.NODE_ENV_STORE_ID}/products.json`,
    headers: {
      Authorization: `${process.env.NODE_ENV_API}`,
      "User-Agent": "dev4wear",
    },
  };

  await axios
    .request(config)
    .then((resp) => {
      //console.log(resp.data);
      const result = JSON.stringify(resp.data);
      res.send(result);
      return;
    })
    .catch((error) => {
      console.log(error);
      return;
    });
});
//ONE PRODUCT
router.post("/product/:id", async (req, res) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.printify.com/v1/shops/${process.env.NODE_ENV_STORE_ID}/products/${req.params.id}.json`,
    headers: {
      Authorization: `${process.env.NODE_ENV_API}`,
      "User-Agent": "dev4wear",
    },
  };

  axios
    .request(config)
    .then((response) => {
      res.send(JSON.stringify(response.data));
      return;
    })
    .catch((error) => {
      res.send(error);
      return;
    });
});
//ONE ORDER
router.get("*order/:id", async (req, res) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.printify.com/v1/shops/${process.env.NODE_ENV_STORE_ID}/orders/${req.params.id}.json`,
    headers: {
      Authorization: `${process.env.NODE_ENV_API}`,
      "User-Agent": "dev4wear",
    },
  };

  await axios
    .request(config)
    .then((response) => {
      res.send(JSON.stringify(response.data));
      return;
    })
    .catch((error) => {
      res.send(error);
      return;
    });
});

//ORDERS

router.get("/orders", async (req, res) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.printify.com/v1/shops/${process.env.NODE_ENV_STORE_ID}/orders.json`,
    headers: {
      Authorization: `${process.env.NODE_ENV_API}`,
      "User-Agent": "dev4wear",
    },
  };

  await axios
    .request(config)
    .then((response) => {
      res.send(JSON.stringify(response.data));
      return;
    })
    .catch((error) => {
      res.send(error);
      return;
    });
});

//CREATE ORDER
router.post("/create_order", async (req, res) => {
  const payload = req.body;
  const data = JSON.stringify({
    external_id: "<string>",
    line_items: [
      {
        product_id: "<string>",
        print_provider_id: "<integer>",
        blueprint_id: "<integer>",
        variant_id: "<integer>",
        print_areas: "<object>",
        quantity: "<integer>",
      },
      {
        product_id: "<string>",
        print_provider_id: "<integer>",
        blueprint_id: "<integer>",
        variant_id: "<integer>",
        print_areas: "<object>",
        quantity: "<integer>",
      },
    ],
    shipping_method: 1,
    send_shipping_notification: true,
    address_to: {
      first_name: "<string>",
      last_name: "<string>",
      email: "<string>",
      phone: "<string>",
      country: "<string>",
      region: "<string>",
      address1: "<string>",
      address2: "<string>",
      city: "<string>",
      zip: "<string>",
    },
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.printify.com/v1/shops/${process.env.NODE_ENV_STORE_ID}/orders.json`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.NODE_ENV_API}`,
      "User-Agent": "dev4wear",
    },
    data: data,
  };

  // await axios
  //   .request(config)
  //   .then((response) => {
  //     res.send(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     res.send(error);
  //   });
  res.send(config);
  console.log(config);
  return;
});

module.exports = router;
