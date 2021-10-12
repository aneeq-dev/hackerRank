const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const db = require("../models");

/**
 * 1- Get the preparation kits (with all info like, no. of attempts, mock-ups, name)
	2- Post preparation kits
	3- Update preparation kits
	4- Delete kits
	5- Get all the underlying skills/topics of the kits
	6- Get all the underlying challenges of the specific skill based on the duration selected and 	difficulty selected
	7- Get the mock up test based on the day selected (like day 1, day 2) and skill id
 */

function validateKitBody(cust) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    duration: Joi.string()
      .required()
      .valid("1 week", "1 month", "3 months", ">3 months"),
    difficulty: Joi.string()
      .required()
      .valid("basic", "intermediate", "advanced", "all"),
    attempts: Joi.number().min(0),
  });

  return schema.validate(cust);
}

exports.getKits = async function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getKits");
};

exports.postKits = async function (req, res, _next) {
  // res.send("NOT IMPLEMENTED: postKits");

  const { error } = validateKitBody(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const kit = {
      name: req.body.name,
      duration: req.body.duration,
      difficulty: req.body.difficulty,
      attempts: req.body.attempts,
    };

    let saveKit = null;

    saveKit = await db.Kits.create(kit);
    console.log(saveKit);
    return res.status(200).send(saveKit);
  } catch (ex) {
    console.log("ss: ", ex);
    for (i in ex.errors) {
      return res.send(ex.errors[i].message);
    }
  }
  res.send("done");
};

exports.updateKits = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: updateKits");
};

exports.deleteKits = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: deleteKits");
};

exports.getAllSkillsOfKit = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getAllSkillsOfKit");
};

exports.getAllChallengesOfSkill = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getAllChallengesOfSkill");
};

exports.getMockUpTestOfKit = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getMockUpTestOfKit");
};
