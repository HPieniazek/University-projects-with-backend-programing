import express from "express";
const router = express.Router();

const {
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany
} = require("./companyController")


router.route('/').get(getCompany).post(createCompany).delete(deleteCompany).put(updateCompany)


module.exports = router; 