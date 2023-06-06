const Sequelize = require("sequelize");
const db = require("../config/db");

const Cart = db.define(
  "Cart",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    items: {
      type: Sequelize.STRING(500),
      allowNull: true,
      unique: false,
    },
  },
  {
    Sequelize,
    tableName: "Cart",
    timeStamps: false,
  }
);
module.exports = Cart;
