const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

/**
 * 1- Get the preparation kits (with all info like, no. of attempts, mock-ups, name)
	2- Post preparation kits
	3- Update preparation kits
	4- Delete kits
	5- Get all the underlying skills/topics of the kits
	6- Get all the underlying challenges of the specific skill based on the duration selected and 	difficulty selected
	7- Get the mock up test based on the day selected (like day 1, day 2) and skill id
 */
exports.getKits = function (req, res) {
  res.send("NOT IMPLEMENTED: getKits");
};

exports.postKits = function (req, res) {
  res.send("NOT IMPLEMENTED: postKits");
};

exports.updateKits = function (req, res) {
  res.send("NOT IMPLEMENTED: updateKits");
};

exports.deleteKits = function (req, res) {
  res.send("NOT IMPLEMENTED: deleteKits");
};

exports.getAllSkillsOfKit = function (req, res) {
  res.send("NOT IMPLEMENTED: getAllSkillsOfKit");
};

exports.getAllChallengesOfSkill = function (req, res) {
  res.send("NOT IMPLEMENTED: getAllChallengesOfSkill");
};

exports.getMockUpTestOfKit = function (req, res) {
  res.send("NOT IMPLEMENTED: getMockUpTestOfKit");
};
