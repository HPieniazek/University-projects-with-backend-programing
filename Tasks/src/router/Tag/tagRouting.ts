import express from "express";
import {Request, Response} from 'express'
import {readFile, writeFile, writeFileSync} from 'fs';
import {checkToken} from './../../login/token';
import {Tag} from './../../class/classes';
import { mainDB } from "./../../database/mongoConnection";
import {randomUUID} from 'crypto';

const router = express.Router();

const tagList: Tag[] = [];
let user =  new Tag( { id: randomUUID() } )
tagList.push();


router.get('/:id', function (req: Request, res: Response) {
    try{ 
        const payload = checkToken(req);
        console.log(payload)  
        if(payload == "user1"){
          res.status(200).send(tagList)
        }else{
          res.status(400).send("error");
        }
      }catch{
          res.status(404).send('Error: check your tag');
      }
})

router.get('/',function(req:Request, res:Response){
    let user1 =  new Tag( { id: randomUUID() } )
    mainDB(user1);   
    res.status(200).send("OK")
})
router.post('/', function (req: Request, res: Response) {

})

router.put('/:id', function (req: Request, res: Response) {

})


router.delete('/:id', function (req: Request, res: Response) {

});
module.exports = router;
 

      