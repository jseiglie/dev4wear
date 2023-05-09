const Sequelize = require("sequelize");
const db = require("../config/db");

const PaymentMethods = db.define(
    "PaymentMethods",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
      },
      cardNumber: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      month: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING(200),
        unique: false,
        allowNull: false,
      },
      cvv: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
    },
    {
      Sequelize,
      tableName: "PaymentMethods",
      timeStamps: false,
    }
  );
module.exports = PaymentMethods
