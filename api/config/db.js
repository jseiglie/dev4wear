const Sequelize = require("sequelize")

module.exports = new Sequelize("dev4wear", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
    operatorAliases: false,
    port: "5433"
})