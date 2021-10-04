var express = require("express");
var router = express.Router();
var certificateController = require("../controllers/certificatesController");

/*
1- Post a certificate
2- Delete a certificate
3- Update certificate
4- allot certificate to a user with respect to the rank achieved
5- Get certificates with respect to user id  
*/

router.post("/postCertificate", certificateController.postCertificate);
router.delete("/deleteCertificate", certificateController.deleteCertificate);
router.put("/updateCertificate", certificateController.updateCertificate);
router.get("/getCertificates", certificateController.getCertificates);

module.exports = router;
