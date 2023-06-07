const Sequelize = require("sequelize");
const db = require("../config/db");
const ItemsCategoriesRel = db.define(
  "ItemsCategoriesRel", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
      },
  })

  module.exports = ItemsCategoriesRel