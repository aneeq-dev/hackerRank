var express = require("express");
var router = express.Router();
var contestController = require("../../controllers/contest.controller");

/*
1- Post a contest
2- Delete a contest
3- Update contest
4- Get contests
5- Get solutions with respect to contest id
*/
/**
 * @swagger
 * tags:
 *  name: Contests
 *  description: All Contests routes
 */
/**
 * @swagger
 * /postContest:
 *  post:
 *    tags: [Contests]
 *    description: Use to post Contest
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postContest", contestController.postContest);
/**
 * @swagger
 * /deleteContest:
 *  delete:
 *    tags: [Contests]
 *    description: Use to delete Contest
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/deleteContest", contestController.deleteContest);
/**
 * @swagger
 * /updateContest:
 *  put:
 *    tags: [Contests]
 *    description: Use to update a Contest
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/updateContest", contestController.updateContest);
/**
 * @swagger
 * /getContests:
 *  get:
 *    tags: [Contests]
 *    description: Use to get Contest
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getContests", contestController.getContests);
/**
 * @swagger
 * /getSolutions:
 *  get:
 *    tags: [Contests]
 *    description: Use to post Contest
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getSolutions", contestController.getSolution);

module.exports = router;
