var express = require("express");
var router = express.Router();
var contestController = require("../controllers/contestController");

/*
1- Post a contest
2- Delete a contest
3- Update contest
4- Get contests
5- Get solutions with respect to contest id
*/

router.post("/postContest", contestController.postContest);
router.delete("/deleteContest", contestController.deleteContest);
router.put("/updateContest", contestController.updateContest);
router.get("/getContests", contestController.getContests);
router.get("/getSolutions", contestController.getSolution);

module.exports = router;
