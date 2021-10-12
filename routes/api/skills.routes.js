var express = require("express");
var router = express.Router();
var skillsController = require("../../controllers/skills.controller");

/*
1- Get all the skills based on the kit id
	2- Get all the skills (without kit id)
	3- Get skill’s challenges based on the skill id
	4- Get the mock up tests of the kit id
	5- Get whole skill challenges and mock up test, using pagination. Days must be simulated 	with pagination, for example in day 1, get 3 challenges and 1 test.
	6- Post skill (all above json data)
	7- Update skills
	8- Delete skills
*/
/**
 * @swagger
 * tags:
 *  name: Skills
 *  description: All Skills routes
 */

/**
 * @swagger
 * /getSkillsOnKitID:
 *  get:
 *    tags: [Skills]
 *    description: Use to get Skills based on Kit id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getSkillsOnKitID", skillsController.getSkills);
/**
 * @swagger
 * /getSkills:
 *  get:
 *    tags: [Skills]
 *    description: Use to get all Skills
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getSkills", skillsController.getSkills);
/**
 * @swagger
 * /getSkillsChallengesOnSkillID:
 *  get:
 *    tags: [Skills]
 *    description: Use to get all challenges of a skill based on skill id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get(
  "/getSkillsChallengesOnSkillID",
  skillsController.getSkillsChallengesOnSkillID
);
/**
 * @swagger
 * /getMockupTestsofAKit:
 *  get:
 *    tags: [Skills]
 *    description: Use to get all tests of a kit based on kit id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getMockupTestsofAKit", skillsController.getMockupTestsofAKit);
/**
 * @swagger
 * /getWholeSkillsChallengesAndTests:
 *  get:
 *    tags: [Skills]
 *    description: Use to get challenges and tests AT once using skill id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get(
  "/getWholeSkillsChallengesAndTests",
  skillsController.getWholeSkillsChallengesAndTests
);
/**
 * @swagger
 * /postSkill:
 *  post:
 *    tags: [Skills]
 *    description: Use to post skill
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postSkill", skillsController.postSkill);
/**
 * @swagger
 * /updateSkill:
 *  put:
 *    tags: [Skills]
 *    description: Use to update a skill
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/updateSkill", skillsController.updateSkill);
/**
 * @swagger
 * /deleteSkill:
 *  delete:
 *    tags: [Skills]
 *    description: Use to delete a skill
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/deleteSkill", skillsController.deleteSkill);

module.exports = router;
