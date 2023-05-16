const Sequelize = require("sequelize");
const db = require("../config/db");
const Items = db.define(
  "Items",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    category: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: true,
    },
    image_url: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    cloudinary_id: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    timesBought: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    timesDesired: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    Sequelize,
    tableName: "Items",
    timeStamps: false,
  }
);
module.exports = Items;
