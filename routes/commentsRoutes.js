var express = require("express");
var router = express.Router();
var commentsController = require("../controllers/commentsController");

router.get(
  "/getCommentsByChallengeID",
  commentsController.getCommentsByChallengeID
);
router.post("/postComment", commentsController.postComment);
router.post("/postSubComment", commentsController.postSubComment);
router.put("/upvoteAComment", commentsController.upvoteAComment);
router.get(
  "/getCommentandSubComments",
  commentsController.getCommentandSubComments
);

module.exports = router;
