var express = require("express");
var router = express.Router();
var mockTest = require("../../controllers/mocktest.controller");

/**
 * @swagger
 * tags:
 *  name: Tests
 *  description: All Tests routes
 */

/**
 * @swagger
 * /postMockTest:
 *  post:
 *    tags: [Tests]
 *    description: Use to post a mock test
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postMockTest", mockTest.postMockTest);
/**
 * @swagger
 * /deleteMockTest:
 *  delete:
 *    tags: [Tests]
 *    description: Use to delete a mock test
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/deleteMockTest", mockTest.deleteMockTest);

module.exports = router;
