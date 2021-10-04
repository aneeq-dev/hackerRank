const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

/*
1- Post a certificate
2- Delete a certificate
3- Update certificate
4- allot certificate to a user with respect to the rank achieved
5- Get certificates with respect to user id  
*/
exports.postCertificate = function (req, res) {
  res.send("NOT IMPLEMENTED: Post a certificate/ allot certificate");
};

exports.deleteCertificate = function (req, res) {
  res.send("NOT IMPLEMENTED: delete certificate");
};

exports.updateCertificate = function (req, res) {
  res.send("NOT IMPLEMENTED: update certificate");
};

exports.getCertificates = function (req, res) {
  res.send("NOT IMPLEMENTED: getCertificates");
};
