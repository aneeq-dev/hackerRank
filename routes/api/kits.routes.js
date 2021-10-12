const bodyParser = require("body-parser").json();
var express = require("express");
var router = express.Router();
var kitsController = require("../../controllers/kits.controller");

/*
    1- Get the preparation kits (with all info like, no. of attempts, mock-ups, name)
    2- Post preparation kits
    3- Update preparation kits
    4- Delete kits
    5- Get all the underlying skills/topics of the kits
    6- Get all the underlying challenges of the specific skill based on the duration selected and 	difficulty selected
    7- Get the mock up test based on the day selected (like day 1, day 2) and skill id
*/
/**
 * @swagger
 * tags:
 *  name: Kits
 *  description: All Kits routes
 */

/**
 * @swagger
 * /getKits:
 *  get:
 *    tags: [Kits]
 *    description: Use to get kits
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getKits", kitsController.getKits);
/**
 * @swagger
 * /postKits:
 *  post:
 *    tags: [Kits]
 *    description: Use to submit a kit
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postKits", bodyParser, kitsController.postKits);
/**
 * @swagger
 * /updateKits:
 *  put:
 *    tags: [Kits]
 *    description: Use to update a kit
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/updateKits", kitsController.updateKits);
/**
 * @swagger
 * /deleteKits:
 *  delete:
 *    tags: [Kits]
 *    description: Use to delete a kit
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/deleteKits", kitsController.deleteKits);
/**
 * @swagger
 * /getAllSkillsOfKit:
 *  get:
 *    tags: [Kits]
 *    description: Use to get skills of a kit
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getAllSkillsOfKit", kitsController.getAllSkillsOfKit);
/**
 * @swagger
 * /getAllChallengesOfSkill:
 *  get:
 *    tags: [Kits]
 *    description: Use to get challenges of a skill
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getAllChallengesOfSkill", kitsController.getAllChallengesOfSkill);
/**
 * @swagger
 * /getMockUpTestOfKit:
 *  get:
 *    tags: [Kits]
 *    description: Use to get tests of a kit
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getMockUpTestOfKit", kitsController.getMockUpTestOfKit);

module.exports = router;
