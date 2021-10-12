var express = require("express");
var router = express.Router();
var Leaderboard = require("../../controllers/leaderboard.controller");

/**
 * @swagger
 * tags:
 *  name: Leaderboard
 *  description: All Leaderboard routes
 */

/**
 * @swagger
 * /getLeaderBoard:
 *  get:
 *    tags: [Leaderboard]
 *    description: Use to get leaderboard of a challenge
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getLeaderBoard", Leaderboard.getLeaderBoard);

module.exports = router;
