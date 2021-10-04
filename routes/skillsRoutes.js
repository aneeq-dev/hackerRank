var express = require("express");
var router = express.Router();
var skillsController = require("../controllers/skillsController");

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
router.get("/getSkillsOnKitID", skillsController.getSkills);
router.get("/getSkills", skillsController.getSkills);
router.get(
  "/getSkillsChallengesOnSkillID",
  skillsController.getSkillsChallengesOnSkillID
);
router.get("/getMockupTestsofAKit", skillsController.getMockupTestsofAKit);
router.get(
  "/getWholeSkillsChallengesAndTests",
  skillsController.getWholeSkillsChallengesAndTests
);

router.post("/postSkill", skillsController.postSkill);
router.put("/updateSkill", skillsController.updateSkill);
router.delete("/deleteSkill", skillsController.deleteSkill);

module.exports = router;
