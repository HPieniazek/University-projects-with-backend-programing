import express from 'express'
import {UserModel} from './../../MODEL/MongoSchemas/UserSchema';
import {User} from './../../MODEL/Classes/User';

import { MongoDB } from "../../SERVICE/database/mongoConnection";
import {checkToken} from '../login/token';
import {randomUUID} from 'crypto';
import {Request, Response} from 'express'
import {FileService} from '../../SERVICE/File/FileService';
const dataTagsFile = (__dirname)+'/dataTagsFile.json';




const app = express()
app.use(express.json());

const getUsers = async (req: Request, res: Response) => {
    try{ 
        const payload = checkToken(req);
        if(payload == "user1"){
          const mongo = new MongoDB()
          const readedFiles = await mongo.MongoFind( UserModel)
          
          res.status(200).send(readedFiles)// zwraca pustą tablice 
        }else{
          res.status(400).send("error");
        }
    }catch{
          res.status(404).send('Error: check your tag');
    }
}

const getUser = (req: Request, res: Response) => {
    
   
}

const createUser = async (req: Request, res: Response) => {
  try{ 
      const payload = checkToken(req);
      if(payload == "user1"){
        const mongo = new MongoDB()
        const test = await mongo.MongoSave(req.body, UserModel)
        res.status(201).send("ok" );
      }else{
          res.status(400).send("error POST TASK");
      }
    }catch{
      console.log("catch "+req.body.id)
        res.status(401).send("Error: check your tag");
    }
}

// do poprawy razem z mongoconection
const updateUser = async (req: Request, res: Response) => {
    try{
        const mongo = new MongoDB()
        const update = await mongo.MongoUpdate(req.body, UserModel)
        res.status(200).send(update)
    }catch{
        res.status(404).send('Cannot update tag of id: ' + req.body)
    }
  }

const deleteUser = (req: Request, res: Response) => {
    try{
        const mongo = new MongoDB()
        const test = mongo.MongoDelete(req.body,UserModel)
        res.status(200).send(test);
    }catch{
        res.send('Error: Cant delete tag of id: ' + req.body)
    }
  }

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}