const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const db = require("../config/database");
const pg = require("pg");
var pool = new pg.Pool();

const { Pool, Client } = require("pg");

/*const client = {
  username: "testuser",
  password: 123456,
  database: "testdb",
  host: "127.0.0.1",
  dialect: "postgres",
  port: 5432,
};*/

let connection_string = "postgressql://testuser:123456@localhost:5432/testdb";
const client = new Client({
  connectionString: connection_string,
});
client.connect();
/*
try {
  const client = new Client({
    username: "testuser",
    password: 123456,
    database: "testdb",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
  });
  client.connect();
} catch (ex) {
  console.log(ex);
}
*/
exports.login = function (req, res) {
  const query = `SELECT * FROM Users WHERE name=aneeq`;

  client.query(query, (err, res) => {
    console.log(err, res);
    client.end();
  });
  res.send("token");
};

exports.signUp = function (req, res) {
  res.send("NOT IMPLEMENTED: Sign up");
};

exports.updateUser = function (req, res) {
  res.send("NOT IMPLEMENTED: User update");
};

exports.getProfileInfo = function (req, res) {
  res.send("NOT IMPLEMENTED: User getProfileInfo");
};

exports.getUserRank = function (req, res) {
  res.send("NOT IMPLEMENTED: User getUserRank");
};

exports.updatePassword = function (req, res) {
  res.send("NOT IMPLEMENTED: User updatePassword");
};

function validateForLoginCust(cust) {
  const schema = Joi.object({
    phoneNumber: Joi.string().required(),
    password: Joi.string().min(8).max(200).required(),
  });
  return schema.validate(cust);
}
