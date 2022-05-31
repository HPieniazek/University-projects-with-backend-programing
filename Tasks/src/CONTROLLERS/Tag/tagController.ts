import express from 'express'
import {TagModel} from './../../MODEL/MongoSchemas/TagSchema';
import {Tag} from './../../MODEL/Classes/Tag';

import { MongoDB } from "../../SERVICE/database/mongoConnection";
import {checkToken} from '../login/token';
import {randomUUID} from 'crypto';
import {Request, Response} from 'express'
import {FileService} from '../../SERVICE/File/FileService';
const dataTagsFile = (__dirname)+'/dataTagsFile.json';




const app = express()
app.use(express.json());


const getTags = async (req: Request, res: Response) => {
    try{ 
        const payload = checkToken(req);
        if(payload == "user1"){
          const mongo = new MongoDB()
          const readedFiles = await mongo.MongoFind( TagModel)
          console.log(readedFiles)//tu jest dobrze
          res.status(200).send(readedFiles)// zwraca pustą tablice 
        }else{
          res.status(400).send("error");
        }
    }catch{
          res.status(404).send('Error: check your tag');
    }
}

const getTag = (req: Request, res: Response) => {
    
   
}

const createTag = async (req: Request, res: Response) => {
  try{ 
      const payload = checkToken(req);
      if(payload == "user1"){
        
        const mongo = new MongoDB()
        await mongo.MongoSave(req.body, TagModel)
        
        res.status(201).send("ok");
      }else{
          res.status(400).send("error");
      }
    }catch{
      console.log("catch "+req.body.id)
        res.status(401).send("Error: check your tag");
    }
}
// do poprawy razem z mongoconection
const updateTag = async (req: Request, res: Response) => {
    try{
        const mongo = new MongoDB()
        const update = await mongo.MongoUpdate(req.body, TagModel)
        res.status(200).send(update)
    }catch{
        res.status(404).send('Cannot update tag of id: ' + req.body)
    }
  }

const deleteTag = (req: Request, res: Response) => {
    try{
        const mongo = new MongoDB()
        const test = mongo.MongoDelete(req.body,TagModel)
        res.status(200).send(test);
    }catch{
        res.send('Error: Cant delete tag of id: ' + req.body)
    }
  }

module.exports = {
  getTag,
  getTags,
  createTag,
  updateTag,
  deleteTag,
}