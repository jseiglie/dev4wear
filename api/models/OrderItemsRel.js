const Sequelize = require("sequelize");
const db = require("../config/db");
const OrderItemsRel = db.define(
  "OrderItemsRel", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
      },
  })

  module.exports = OrderItemsRel