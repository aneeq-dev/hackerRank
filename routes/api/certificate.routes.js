var express = require("express");
var router = express.Router();
var certificateController = require("../../controllers/certificates.controller");

/*
1- Post a certificate
2- Delete a certificate
3- Update certificate
4- allot certificate to a user with respect to the rank achieved
5- Get certificates with respect to user id  
*/
/**
 * @swagger
 * tags:
 *  name: Certificates
 *  description: All Certificates routes
 */
/**
 * @swagger
 * /postCertificate:
 *  post:
 *    tags: [Certificates]
 *    description: Use to post a certificate
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/postCertificate", certificateController.postCertificate);
/**
 * @swagger
 * /deleteCertificate:
 *  delete:
 *    tags: [Certificates]
 *    description: Use to delete a certificate
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/deleteCertificate", certificateController.deleteCertificate);
/**
 * @swagger
 * /updateCertificate:
 *  put:
 *    tags: [Certificates]
 *    description: Use to update a certificate
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/updateCertificate", certificateController.updateCertificate);
/**
 * @swagger
 * /getCertificates:
 *  get:
 *    tags: [Certificates]
 *    description: Use to get certificates
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getCertificates", certificateController.getCertificates);

module.exports = router;
