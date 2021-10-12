var express = require("express");
var router = express.Router();
var editorialController = require("../../controllers/editorial.controller");

/*
    16- Get the editorial solution to a challenge
*/
/**
 * @swagger
 * tags:
 *  name: Editorial
 *  description: All Editorial routes
 */
/**
 * @swagger
 * /getEditorial:
 *  get:
 *    tags: [Editorial]
 *    description: Use to get editorial of a challenge
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getEditorial", editorialController.getEditorial);

module.exports = router;
