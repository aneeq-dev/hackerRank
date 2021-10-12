var express = require("express");
var router = express.Router();
var commentsController = require("../../controllers/comments.controller");

/**
 * @swagger
 * tags:
 *  name: Comments
 *  description: All Comments routes
 */
/**
 * @swagger
 * /getCommentsByChallengeID:
 *  get:
 *    tags: [Comments]
 *    description: Use to get Comments wrt challenge id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get(
  "/getCommentsByChallengeID",
  commentsController.getCommentsByChallengeID
);
/**
 * @swagger
 * /postComment:
 *  post:
 *    tags: [Comments]
 *    description: Use to post Comment
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postComment", commentsController.postComment);
/**
 * @swagger
 * /postSubComment:
 *  post:
 *    tags: [Comments]
 *    description: Use to post a sub Comment
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postSubComment", commentsController.postSubComment);
/**
 * @swagger
 * /upvoteAComment:
 *  put:
 *    tags: [Comments]
 *    description: Use to upvote a Comment
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/upvoteAComment", commentsController.upvoteAComment);
/**
 * @swagger
 * /getCommentandSubComments:
 *  get:
 *    tags: [Comments]
 *    description: Use to get a comment and subcomments
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get(
  "/getCommentandSubComments",
  commentsController.getCommentandSubComments
);

module.exports = router;
