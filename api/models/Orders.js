const Sequelize = require("sequelize");
const db = require("../config/db");

const Orders = db.define(
  "Orders",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    items: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payed: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    Sequelize,
    tableName: "Orders",
    timestamps: true,
  }
);
module.exports = Orders;
