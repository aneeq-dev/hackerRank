const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const config = require("config");
const bcrypt = require("bcrypt");
//const db = require("../config/database");
const pg = require("pg");
const bodyParser = require("body-parser").json();

const db = require("../models");

function validatecustomerSchema(cust) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(0),
    password: Joi.string().min(8).max(200).required(),
  });

  return schema.validate(cust);
}

function validateSignInBody(cust) {
  const schema = Joi.object({
    email: Joi.string().min(3),
    password: Joi.string().min(8).max(200).required(),
  });

  return schema.validate(cust);
}

function validateChangePasswordBody(cust) {
  const schema = Joi.object({
    email: Joi.string().required(),
    oldPassword: Joi.string().min(8).max(200).required(),
    newPassword: Joi.string().min(8).max(200).required(),
  });
  return schema.validate(cust);
}

function validateUpdateBodySchema(cust) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(cust);
}

exports.login = async function (req, res, _next) {
  const { error } = validateSignInBody(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await db.Users.findAll({
    where: {
      email: req.body.email,
    },
  });

  if (user.length === 0)
    return res.status(400).send("Invalid email or password!");

  const validPassword = await bcrypt.compare(
    req.body.password,
    user[0].dataValues.password
  );
  if (!validPassword) return res.status(400).send("Invalid email or password!");

  const token = jwt.sign(
    {
      id: user[0].dataValues.id,
      name: user[0].dataValues.name,
      email: user[0].dataValues.email,
    },
    config.get("jwtPrivateKey")
  );
  return res.send(token);
};

exports.signUp = async function (req, res, _next) {
  const { error } = validatecustomerSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log("req: ", req.body);
  // find phone number - if already present then 400 bad request
  const user = await db.Users.findAll({
    where: {
      email: req.body.email,
    },
  });

  console.log("user: ", user);
  if (user.length > 0) return res.status(400).send("Email already registered!");

  // if no error then add customer
  const user2 = {
    name: req.body.name,
    email: req.body.email,
    rank: 0,
    password: req.body.password,
  };

  const salt = await bcrypt.genSalt(10);
  user2.password = await bcrypt.hash(user2.password, salt);

  console.log("uuue: ", user2);
  let saveUser = null;
  try {
    saveUser = await db.Users.create(user2);
    console.log(saveUser);
  } catch (ex) {
    for (i in ex.errors) {
      return res.send(ex.errors[i].message);
    }
  }
  const token = jwt.sign(
    {
      id: saveUser.dataValues.id,
      name: saveUser.dataValues.name,
      email: saveUser.dataValues.email,
    },
    config.get("jwtPrivateKey")
  );

  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send({
      name: user2.name,
      email: user2.email,
    });
};

/*
{
  "name":"waqar",
  "email":"a2@gmail.com"
}*/
exports.updateUser = async function (req, res, _next) {
  const { error } = validateUpdateBodySchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log("ss: ", req.body);
  db.User.update({ name: req.body.name }, { where: { id: req.customer.id } })
    .then((res2) => {
      console.log("updated successfully!", res2);
      return res.send({
        name: req.body.name,
      });
    })
    .catch((err) => console.log("err:", err));

  //console.log("ss: ", req.customer);
};

exports.getProfileInfo = async function (req, res, _next) {
  // res.send("NOT IMPLEMENTED: User getProfileInfo");

  const user = await db.Users.findAll({
    where: {
      id: req.customer.id,
    },
    attributes: ["id", "name", "email", "rank"],
  });

  //console.log(user);
  if (user.length > 0) return res.send(user);
  return res.status(404).send("Data Not Found!");
};

exports.getUserRank = async function (req, res, _next) {
  const user = await db.Users.findAll({
    where: {
      id: req.query.id,
    },
    attributes: ["id", "rank"],
  });

  //console.log(user);
  if (user.length > 0) return res.send(user);
  return res.status(404).send("Data Not Found!");
};

/**
{

    "oldPassword": "Allah11111",
    "newPassword": "Allah111111",
    "email":"a3@gmail.com"
}
 */
exports.updatePassword = async function (req, res, _next) {
  const { error } = validateChangePasswordBody(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await db.Users.findAll({
    where: {
      id: req.customer.id,
      email: req.body.email,
    },
  });
  console.log(user[0].dataValues);
  if (user.length > 0) {
    // if phone number is present

    const validPassword = await bcrypt.compare(
      req.body.oldPassword,
      user[0].dataValues.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid phone number or password!");

    const user2 = {
      password: req.body.newPassword,
    };

    try {
      const salt = await bcrypt.genSalt(10);
      user2.password = await bcrypt.hash(user2.password, salt);

      db.User.update(
        { password: user2.password },
        { where: { id: req.customer.id } }
      )
        .then((res2) => {
          console.log("updated successfully!", res2);
          return res.send({
            email: req.body.email,
          });
        })
        .catch((err) => console.log("err:", err));

      return;
    } catch (ex) {
      for (i in ex.errors) {
        return res.send(ex.errors[i].message);
      }
    }

    //res.status(400).send(null);
  } else {
    return res.status(400).send("Invalid phone number or password!");
  }
};

exports.deleteUser = async function (req, res, _next) {
  try {
    db.User.destroy({
      where: {
        id: req.customer.id,
      },
    })
      .then((rowDeleted) => {
        if (rowDeleted === 1) {
          console.log("Deleted successfully");
          return res.status(200).send("Success");
        }
      })
      .catch((ex) => {
        console.log(ex);
        return res.status(404).send("Not found!");
      });
  } catch (ex) {
    console.log(ex);
  }
};
