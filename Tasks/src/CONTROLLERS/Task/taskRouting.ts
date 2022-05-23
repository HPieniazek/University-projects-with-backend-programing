import express from "express";
const router = express.Router();
////const TagSchema = require('./../MODEL/classes')
////import {Tag} from './../../MODEL/classes';


const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("./taskController")



// router.get('/:id', getTag)
// router.get('/', getTags)
// router.post('/', createTag)
// router.put('/:id', updateTag)
// router.delete('/:id', deleteTag);

router.route('/').get(getTasks).post(deleteTask).delete(createTask).put(updateTask)
router.route('/:id').get(getTask)

module.exports = router; 