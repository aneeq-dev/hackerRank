var express = require("express");
var router = express.Router();
var submissionController = require("../controllers/submissionController");

/**
 * 
     Submission
        7- Post challenge data when user start solving challenge. 
    	8- And on submission update that record with passed or not, using number of test cases 	passed
	    8- Get the submission data of a user with respect to challenge id, and user id (list down 	submissions)
		10- Get the submitted code with respect to user’s id and challenge id
 */

router.post("/postSubmission", submissionController.postSubmission);
router.put("/updateSubmission", submissionController.updateSubmission);
router.get("/getSubmissionData", submissionController.getSubmissionData);
router.get("/getSubmittedCode", submissionController.getSubmittedCode);

module.exports = router;
