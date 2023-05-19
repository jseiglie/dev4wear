//import {sequelize} from "./config/db.js";
//import  express  from "express";
const https = require("https");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const db = require("././config/db");
const cors = require("cors");
const uuid = require("uuid").v4;
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const Users = require("./models/Users");
const Categories = require("./models/Categories");
const Orders = require("./models/Orders");
const PaymentMethods = require("./models/PaymentMethods");
const Items = require("./models/Items");
const path = require("path");
//app.use(express.urlencoded({extended: true}))
app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.static(path.join(__dirname, "public")))
// app.use((req, res, next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Origin", "GET, POST, PUT, DELETE");
//     next()
// })

const api = require("./Routes/router");

const exp = require("constants");

app.use("/api", api);

//Relationships
Users.hasMany(Orders, { foreignKey: "order_id" });
Orders.belongsTo(Users);
Users.hasMany(PaymentMethods, { foreignKey: "PaymentMethod_id" });
PaymentMethods.belongsTo(Users);
Orders.hasOne(PaymentMethods, { foreignKey: "PaymentMethod_id" });
PaymentMethods.belongsTo(Orders);
Orders.hasMany(Items, { foreignKey: "Items_id" });
Items.belongsTo(Orders);
Items.hasMany(Categories, { foreignKey: "category_id" });
Categories.belongsTo(Items);

try {
  db.sync({ alter: true }).then(() => {
    console.log("db connected");
    app.listen(port, () => {
      console.log("server running on port " + port);
    });
  });
} catch (error) {
  console.error(error);
}
