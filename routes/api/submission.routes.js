var express = require("express");
var router = express.Router();
var submissionController = require("../../controllers/submission.controller");

/**
 * 
     Submission
        7- Post challenge data when user start solving challenge. 
    	8- And on submission update that record with passed or not, using number of test cases 	passed
	    8- Get the submission data of a user with respect to challenge id, and user id (list down 	submissions)
		10- Get the submitted code with respect to user’s id and challenge id
 */

/**
 * @swagger
 * tags:
 *  name: Submission
 *  description: All submission routes
 */

/**
 * @swagger
 * /postSubmission:
 *
 *  post:
 *    tags: [Submission]
 *    description: Submitting a submission
 *    responses:
 *      '200':
 *        description: A successful response
 *
 */
router.post("/postSubmission", submissionController.postSubmission);

/**
 * @swagger
 * /updateSubmission:
 *
 *  put:
 *    tags: [Submission]
 *    description: Updating a submission
 *    responses:
 *      '200':
 *        description: A successful response
 *
 */
router.put("/updateSubmission", submissionController.updateSubmission);

/**
 * @swagger
 * /getSubmissionData:
 *
 *  get:
 *    tags: [Submission]
 *    description: Getting a submission
 *    responses:
 *      '200':
 *        description: A successful response
 *
 */
router.get("/getSubmissionData", submissionController.getSubmissionData);

/**
 * @swagger
 * /getSubmittedCode:
 *
 *  get:
 *    tags: [Submission]
 *    description: Getting a submission's code
 *    responses:
 *      '200':
 *        description: A successful response
 *
 */
router.get("/getSubmittedCode", submissionController.getSubmittedCode);

module.exports = router;
