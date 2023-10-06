const { Sequelize } = require("sequelize");

const dbInstance = new Sequelize({
  host: "localhost",
  username: "root",
  password: "contraseña_secreta",
  database: "s11_06_n_node_react",
  port: 3306,
  dialect: "mysql"
});

module.exports = {dbInstance};
