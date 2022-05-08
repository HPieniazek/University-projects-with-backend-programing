import express from "express";
const router = express.Router();
////const TagSchema = require('./../MODEL/classes')
////import {Tag} from './../../MODEL/classes';


const {
  getTag,
  getTags,
  createTag,
  updateTag,
  deleteTag
} = require("./tagController")



// router.get('/:id', getTag)
// router.get('/', getTags)
// router.post('/', createTag)
// router.put('/:id', updateTag)
// router.delete('/:id', deleteTag);

router.route('/').get(getTags).post(createTag)
router.route('/:id').get(getTag).delete(deleteTag).put(updateTag)

module.exports = router;
 

      