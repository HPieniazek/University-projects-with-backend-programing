import express from "express";
import {Request, Response} from 'express'
import {readFile, writeFile, writeFileSync} from 'fs';
import {checkToken} from '../login/token';
import {Tag} from './../../MODEL/classes';
import { mainDB } from "../database/mongoConnection";
import {randomUUID} from 'crypto';
const TagSchema = require('./../MODEL/classes')

const {
  getTag,
  getTags
} = require("./tagController")

const router = express.Router();



router.get('/:id', getTag)

router.get('/', getTags)
router.post('/', function (req: Request, res: Response) {

})

router.put('/:id', function (req: Request, res: Response) {

})


router.delete('/:id', function (req: Request, res: Response) {

});
module.exports = router;
 

      