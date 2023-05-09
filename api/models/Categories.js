const Sequelize = require("sequelize");
const db = require("../config/db");

const Categories = db.define(
    "Categories",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
    },
    {
      Sequelize,
      tableName: "Categories",
      timeStamps: false,
    }
  );
module.exports = Categories
