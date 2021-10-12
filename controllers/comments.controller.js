const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

/*
 11- Get the comments with respect to challenge id
	12- Post a comment with respect to challenge id
	13- Post sub-comment to a comment with respect to challenge id
	14- Update the vote of the comment
	15- Get a comment and sub-comments, with respect to comment id

*/
exports.getCommentsByChallengeID = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getCommentsByChallengeID");
};

exports.postComment = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: postComment");
};

exports.postSubComment = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: postSubComment");
};

exports.upvoteAComment = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: upvoteAComment");
};

exports.getCommentandSubComments = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getCommentandSubComments");
};
