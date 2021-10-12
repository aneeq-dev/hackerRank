const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

/*
1- Get all the challenge based on skill id
	2- Post the new challenges, and also post editorial solution in the same api
	3- Update the existing challenge on id
	4- Delete the challenge based on id
	5- Post the challenge data with user id, skill id and kit id (because both skill id or kit id are 	optional; and needs to be inserted at same time, because it is to keep record of the submitted 	data)
	6- Get the challenge based on id, with details including test cases to be passed, attempts and 	name, statement etc.
	
	

    Submission
    	7- Post challenge data when user start solving challenge. 

    	8- And on submission update that record with passed or not, using number of test cases 	passed
	8- Get the submission data of a user with respect to challenge id, and user id (list down 	submissions)
		10- Get the submitted code with respect to user’s id and challenge id


        Leaderboard
        9- Get the leader-board data w.r.t challenge. (sort by rank of user, and get Hacker name, 	Rank, Country and Score, also get the solution)


        Comments
        11- Get the comments with respect to challenge id
	12- Post a comment with respect to challenge id
	13- Post sub-comment to a comment with respect to challenge id
	14- Update the vote of the comment
	15- Get a comment and sub-comments, with respect to comment id

    editorial
    	16- Get the editorial solution to a challenge

*/

exports.getChallengeBySkillID = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: getChallengeByID");
};

exports.postNewChallenge = function (req, res, _next) {
  res.send(
    "NOT IMPLEMENTED: Post the new challenges, and also post editorial solution in the same api"
  );
};

exports.updateChallengeByID = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: Update the existing challenge by id");
};

exports.deleteChallengeByID = function (req, res, _next) {
  res.send("NOT IMPLEMENTED: /Delete the challenge based on id");
};

exports.postChallengeData = function (req, res, _next) {
  res.send(
    "NOT IMPLEMENTED: Post the challenge data with user id, skill id and kit id "
  );
};

exports.getChallenegByIDWithSpecificInfo = function (req, res, _next) {
  res.send(
    "NOT IMPLEMENTED: Get the challenge based on id with details including test cases to be passed, attempts and 	name, statement etc."
  );
};

// post challenge data  when user start solving challenge.
/*exports.postChallengeData = function (req, res) {
    res.send("NOT IMPLEMENTED: Post challenge data when user start solving challenge. ");
  };
  */
