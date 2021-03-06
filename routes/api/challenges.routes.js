var express = require("express");
var router = express.Router();
var challengesController = require("../../controllers/challenges.controller");

/*
    1- Get all the challenge based on skill id
	2- Post the new challenges, and also post editorial solution in the same api
	3- Update the existing challenge on id
	4- Delete the challenge based on id
	5- Post the challenge data with user id, skill id and kit id (because both skill id or kit id are 	optional; and needs to be inserted at same time, because it is to keep record of the submitted 	data)
	6- Get the challenge based on id, with details including test cases to be passed, attempts and 	name, statement etc.
	7- Post challenge data when user start solving challenge. 
*/
/**
 * @swagger
 * tags:
 *  name: Challenges
 *  description: All Challenges routes
 */
/**
 * @swagger
 * /getChallengeBySkillID:
 *  get:
 *    tags: [Challenges]
 *    description: Use to get challenge by skill id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get(
  "/getChallengeBySkillID",
  challengesController.getChallengeBySkillID
);
/**
 * @swagger
 * /postNewChallenge:
 *  post:
 *    tags: [Challenges]
 *    description: Use to post a new challenge
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postNewChallenge", challengesController.postNewChallenge);
/**
 * @swagger
 * /updateChallengeByID:
 *  put:
 *    tags: [Challenges]
 *    description: Use to update a challenge by id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/updateChallengeByID", challengesController.updateChallengeByID);
/**
 * @swagger
 * /deleteChallengeByID:
 *  delete:
 *    tags: [Challenges]
 *    description: Use to delete a challenge by id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/deleteChallengeByID", challengesController.deleteChallengeByID);
/**
 * @swagger
 * /postChallengeData:
 *  post:
 *    tags: [Challenges]
 *    description: Use to post a challenge data
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postChallengeData", challengesController.postChallengeData);
/**
 * @swagger
 * /getChallenegByIDWithSpecificInfo:
 *  get:
 *    tags: [Challenges]
 *    description: Use to get challenge by id with specific info
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get(
  "/getChallenegByIDWithSpecificInfo",
  challengesController.getChallenegByIDWithSpecificInfo
);

module.exports = router;
