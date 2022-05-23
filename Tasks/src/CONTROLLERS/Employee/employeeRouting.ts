import express from "express";
const router = express.Router();

const {
  getEmployee,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require("./employeeController")


router.route('/').get(getEmployees).post(createEmployee).delete(deleteEmployee).put(updateEmployee)
router.route('/:id').get(getEmployee)

module.exports = router; 