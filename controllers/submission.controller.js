const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

/**
    Submission
    7- Post challenge data when user start solving challenge. 
    8- And on submission update that record with passed or not, using number of test cases 	passed
    9- Get the submission data of a user with respect to challenge id, and user id (list down 	submissions)
    10- Get the submitted code with respect to user’s id and challenge id
 */

exports.postSubmission = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: postSubmission");
};

exports.updateSubmission = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: updateSubmission");
};

exports.getSubmissionData = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getSubmissionData");
};

exports.getSubmittedCode = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getSubmittedCode");
};
