const Sequelize = require("sequelize");
const db = require("../config/db");
const Users = db.define(
  "Users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
    lastName: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(60),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING(15),
      allowNull: true,
      unique: true,
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    zip: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING(40),
      allowNull: true,
    },
    state: {
      type: Sequelize.STRING(40),
      allowNull: true,
    },
    country: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
    paymentMethod: {
      type: Sequelize.INTEGER,
      allowNull: true,
      // references:{
      //   model: "PaymentMethods",
      //   key: "id",
      // }
    },
  },
  {
    Sequelize,
    tableName: "Users",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
    ],
  }
);
module.exports = Users;
