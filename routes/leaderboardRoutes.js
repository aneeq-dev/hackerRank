var express = require("express");
var router = express.Router();
var Leaderboard = require("../controllers/leaderboardController");

router.get("/getLeaderBoard", Leaderboard.getLeaderBoard);

module.exports = router;
