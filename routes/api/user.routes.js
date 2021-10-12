const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser").json();
const auth = require("../../middlewares/auth");
const userController = require("../../controllers/user.controller");

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: All users routes
 */

/**
 * @swagger
 * /login:
 *  post:
 *    tags: [Users]
 *    description: Use to login a user
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/login", bodyParser, userController.login);

/**
 * @swagger
 * /signUp:
 *  post:
 *    tags: [Users]
 *    description: Use to sign up a user
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.post("/signUp", bodyParser, userController.signUp);

/**
 * @swagger
 * /updateUser:
 *  put:
 *    tags: [Users]
 *    description: Use to update a user
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.put("/updateUser", bodyParser, auth, userController.updateUser);

/**
 * @swagger
 * /getProfileInfo:
 *  get:
 *    tags: [Users]
 *    description: Use to get user profile information
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getProfileInfo", bodyParser, auth, userController.getProfileInfo);

/**
 * @swagger
 * /getUserRank:
 *  get:
 *    tags: [Users]
 *    description: Use to get User's rank
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getUserRank", bodyParser, userController.getUserRank);

/**
 * @swagger
 * /updatePassword:
 *  put:
 *    tags: [Users]
 *    description: Use to update a password
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/updatePassword", bodyParser, auth, userController.updatePassword);

/**
 * @swagger
 * /deleteUser:
 *  delete:
 *    tags: [Users]
 *    description: Use to delete a user
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/deleteUser", bodyParser, auth, userController.deleteUser);

module.exports = router;
