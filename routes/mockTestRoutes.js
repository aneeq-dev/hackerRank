var express = require("express");
var router = express.Router();
var mockTest = require("../controllers/mocktestController");

router.post("/postMockTest", mockTest.postMockTest);
router.delete("/deleteMockTest", mockTest.deleteMockTest);

module.exports = router;
