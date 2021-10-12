const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

/**
 * 1- Get all the skills based on the kit id
	2- Get all the skills (without kit id)
	3- Get skill’s challenges based on the skill id
	4- Get the mock up tests of the kit id
	5- Get whole skill challenges and mock up test, using pagination. Days must be simulated 	with pagination, for example in day 1, get 3 challenges and 1 test.
	6- Post skill (all above json data)
	7- Update skills
	8- Delete skills
 */

exports.getSkillsOnKitID = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getSkillsOnKitID");
};

exports.getSkills = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getSkills");
};

exports.getSkillsChallengesOnSkillID = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getSkillsChallengesOnSkillID");
};

exports.getMockupTestsofAKit = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getMockupTestsofAKit");
};

exports.getWholeSkillsChallengesAndTests = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getWholeSkillsChallengesAndTests");
};

exports.postSkill = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: postSkill");
};
exports.updateSkill = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: updateSkill");
};

exports.deleteSkill = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: deleteSkill");
};
