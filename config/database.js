const Sequelize = require("sequelize");

module.exports = new Sequelize("testdb", "testuser", "123456", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
