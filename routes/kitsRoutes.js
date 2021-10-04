var express = require("express");
var router = express.Router();
var kitsController = require("../controllers/kitsController");

/*
    1- Get the preparation kits (with all info like, no. of attempts, mock-ups, name)
    2- Post preparation kits
    3- Update preparation kits
    4- Delete kits
    5- Get all the underlying skills/topics of the kits
    6- Get all the underlying challenges of the specific skill based on the duration selected and 	difficulty selected
    7- Get the mock up test based on the day selected (like day 1, day 2) and skill id
*/

router.get("/getKits", kitsController.getKits);
router.post("/postKits", kitsController.postKits);
router.post("/updateKits", kitsController.updateKits);
router.post("/deleteKits", kitsController.deleteKits);
router.post("/getAllSkillsOfKit", kitsController.getAllSkillsOfKit);
router.post("/getAllChallengesOfSkill", kitsController.getAllChallengesOfSkill);
router.post("/getMockUpTestOfKit", kitsController.getMockUpTestOfKit);

module.exports = router;
