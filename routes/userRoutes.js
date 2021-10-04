var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");
var cors = require("cors");
router.use(cors());

router.post("/login", userController.login);
router.post("/signUp", userController.signUp);
router.put("/updateUser", userController.updateUser);
router.get("/getProfileInfo", userController.getProfileInfo);
router.get("/getUserRank", userController.getUserRank);
router.put("/updatePassword", userController.updatePassword);

module.exports = router;
