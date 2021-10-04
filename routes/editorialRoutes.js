var express = require("express");
var router = express.Router();
var editorialController = require("../controllers/editorialController");

/*
    16- Get the editorial solution to a challenge
*/

router.post("/getEditorial", editorialController.getEditorial);

module.exports = router;
