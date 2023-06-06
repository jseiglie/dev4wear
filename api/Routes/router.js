const express = require("express");
// const nodemailer = require("nodemailer");
const router = express.Router();
const bcrypt = require("bcryptjs");
const axios = require("axios");
// const multer = require("multer");
const env = require("dotenv").config();
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/auth.middelware");
const formater = (str) => str.replaceAll(" ", "-");
const Users = require("../models/Users");
const { cloudinary } = require("./../config/cloudinary");
const Categories = require("../models/Categories");
const Items = require("../models/Items");
const {
  create_order,
  cancel_order,
  capture_order,
} = require("../controllers/paypal.controllers");
const Cart = require("../models/Cart");

//checks for validToken
router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

//PAY PAL

router.post("/create_order", async (req, res) => {
  create_order(req, res);
});

router.get("/capture_order", async (req, res) => {
  console.log("PEPEPEPEPEPEPPE");
  capture_order(req, res);
});
router.get("/cancel_order", async (req, res) => {
  cancel_order(req, res);
});

router.get("/designDetails/:id", async (req, res) => {
  const id = req.params.id;

  const resp = await Items.findOne({ where: { cloudinary_id: id } });

  // const { resources } = await cloudinary.search
  // .expression(`public_id: ${id}`)
  // .execute();
  // const publicIDs = resources.map(file=> file.public_id);
  // resp.push(fetch, publicIDs)

  res.send(resp);
});

router.post("/categories", async (req, res) => {
  const { category } = req.body;
  const resp = await Categories.create({ category: category });
  res.send(resp);
});

router.get("/categories", async (req, res) => {
  const resp = await Categories.findAll();
  res.send(resp);
});

// SIGN UP
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const check = await Users.findOne({ where: { email: email } });
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
    res.status(411).json("Email already exists");
  }
});

// CLOUDINARY get imgs
router.get("/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIDs = resources.map((file) => file.public_id);
  res.send(publicIDs);
});

//Cloudinary UPLOAD
router.post("/img_upload", async (req, res) => {
  try {
    const { img, category, name, price } = req.body;
    const uploadResp = await cloudinary.uploader.upload(img);

    const apiResp = await Items.create({
      name: name,
      image_url: uploadResp.url,
      cloudinary_id: uploadResp.public_id,
      category: category,
      price: price,
    });

    res.json({ msg: "uploaded", data: apiResp });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email: email } });
    if (user != null) {
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
    } else {
      res
        .status(410)
        .json({ error: "This email doesn't has a linked account" });
      return;
    }
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
      Authorization: `Bearer ${process.env.NODE_ENV_PRINTIFY_TOKEN}`,
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
      Authorization: `Bearer ${process.env.NODE_ENV_PRINTIFY_TOKEN}`,
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
      Authorization: `Bearer ${process.env.NODE_ENV_PRINTIFY_TOKEN}`,
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
      Authorization: `Bearer ${process.env.NODE_ENV_PRINTIFY_TOKEN}`,
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
      Authorization: `Bearer ${process.env.NODE_ENV_PRINTIFY_TOKEN}`,
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
      Authorization: `Bearer ${process.env.NODE_ENV_PRINTIFY_TOKEN}`,
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

router.get("/cart/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const resp = await Cart.findOne({ where: { UserId: id } });
    if (!resp) {
      const create = await Cart.create({ UserId: id });

      res.send(await create);
    }

    res.send(await resp);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put("/cart/:id", async (req, res) => {
  const { items } = req.body;
  const id = req.params.id;
  const resp = await Cart.update(
    {
      items: items,
    },
    { where: { UserId: id } }
  );
  res.send({ msg: "cart updated" });
});

router.post("/getCartItems", async (req, res) => {
  const { ids } = req.body;
  const promises = await ids.map((el) =>
    fetch(
      `https://api.printify.com/v1/shops/${process.env.NODE_ENV_STORE_ID}/products/${el}.json`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NODE_ENV_PRINTIFY_TOKEN}`,
          "User-Agent": "dev4wear",
          "Content-Type": "application/json",
        },
      }
    ).then((resp) => resp.json())
  );
  await Promise.all(promises).then((data) => res.send(data));
});

module.exports = router;
