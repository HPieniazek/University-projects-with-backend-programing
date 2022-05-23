import express from "express";
const router = express.Router();

const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("./taskController")


router.route('/').get(getTasks).post(createTask).delete(deleteTask).put(updateTask)
router.route('/:id').get(getTask)

module.exports = router; 