var express = require("express");
var router = express.Router();
var challengesController = require("../controllers/challengesController");

/*
    1- Get all the challenge based on skill id
	2- Post the new challenges, and also post editorial solution in the same api
	3- Update the existing challenge on id
	4- Delete the challenge based on id
	5- Post the challenge data with user id, skill id and kit id (because both skill id or kit id are 	optional; and needs to be inserted at same time, because it is to keep record of the submitted 	data)
	6- Get the challenge based on id, with details including test cases to be passed, attempts and 	name, statement etc.
	7- Post challenge data when user start solving challenge. 
*/

router.get(
  "/getChallengeBySkillID",
  challengesController.getChallengeBySkillID
);
router.post("/postNewChallenge", challengesController.postNewChallenge);
router.put("/updateChallengeByID", challengesController.updateChallengeByID);
router.delete("/deleteChallengeByID", challengesController.deleteChallengeByID);
router.post("/postChallengeData", challengesController.postChallengeData);
router.delete("/deleteChallengeByID", challengesController.deleteChallengeByID);
router.get(
  "/getChallenegByIDWithSpecificInfo",
  challengesController.getChallenegByIDWithSpecificInfo
);

module.exports = router;
