import express from 'express'
import {TaskModel} from './../../MODEL/MongoSchemas/TaskSchema';
import {Task} from './../../MODEL/Classes/Task';

import { MongoDB } from "../../SERVICE/database/mongoConnection";
import {checkToken} from '../login/token';
import {randomUUID} from 'crypto';
import {Request, Response} from 'express'
import {FileService} from '../../SERVICE/File/FileService';
const dataTagsFile = (__dirname)+'/dataTagsFile.json';




const app = express()
app.use(express.json());

const getTasks = async (req: Request, res: Response) => {
    try{ 
        const payload = checkToken(req);
        if(payload == "user1"){
          const mongo = new MongoDB()
          const readedFiles = await mongo.MongoFind( TaskModel)
          console.log("Sended")
          res.status(200).send(readedFiles)
        }else{
          res.status(400).send("error");
        }
    }catch{
          res.status(404).send('Error: check your task');
    }
}

const getTask = (req: Request, res: Response) => {
    
   
}

const createTask = async (req: Request, res: Response) => {
  try{ 
      const payload = checkToken(req);
      if(payload == "user1"){
        const mongo = new MongoDB()
        const test = await mongo.MongoSave(req.body, TaskModel)
        console.log(test)
        res.status(201).send("ok" );
      }else{
        res.status(400).send("error POST TASK");
      }
    }catch{
      res.status(401).send("Error: check your task");
    }
}

const updateTask = async (req: Request, res: Response) => {
    try{
        const mongo = new MongoDB()
        const update = await mongo.MongoUpdate(req.body, TaskModel)
        res.status(200).send(update)
    }catch{
        res.status(404).send('Cannot update task of id: ' + req.body)
    }
  }

const deleteTask = (req: Request, res: Response) => {
    try{
        const mongo = new MongoDB()
        const test = mongo.MongoDelete(req.body,TaskModel)
        res.status(200).send(test);
    }catch{
        res.send('Error: Cant delete task of id: ' + req.body)
    }
  }

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}