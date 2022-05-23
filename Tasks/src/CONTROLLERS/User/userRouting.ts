import express from "express";
const router = express.Router();

const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("./userController")


router.route('/').get(getUsers).post(createUser).delete(deleteUser).put(updateUser)
router.route('/:id').get(getUser)

module.exports = router; 