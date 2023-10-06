const { Sequelize } = require("sequelize");
require('dotenv').config();

const dbInstance = new Sequelize({
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "contraseña_secreta",
  database: process.env.DB_NAME || "s11_06_n_node_react",
  port: process.env.DB_PORT || 3306,
  dialect: "mysql"
});

module.exports = {dbInstance};
