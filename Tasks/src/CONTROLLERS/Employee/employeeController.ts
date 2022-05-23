import express from 'express'
import {EmployeeModel} from '../../MODEL/MongoSchemas/EmployeeSchema';
import {Employee} from '../../MODEL/Classes/Employee';

import { MongoDB } from "../../SERVICE/database/mongoConnection";
import {checkToken} from '../login/token';
import {randomUUID} from 'crypto';
import {Request, Response} from 'express'
import {FileService} from '../../SERVICE/File/FileService';
const dataTagsFile = (__dirname)+'/dataTagsFile.json';




const app = express()
app.use(express.json());

const getEmployees = async (req: Request, res: Response) => {
    try{ 
        const payload = checkToken(req);
        if(payload == "user1"){
          const mongo = new MongoDB()
          const readedFiles = await mongo.MongoFind( EmployeeModel)
          
          res.status(200).send(readedFiles)// zwraca pustą tablice 
        }else{
          res.status(400).send("error");
        }
    }catch{
          res.status(404).send('Error: check your tag');
    }
}

const getEmployee = (req: Request, res: Response) => {
    
   
}

const createEmployee = async (req: Request, res: Response) => {
  try{ 
      const payload = checkToken(req);
      if(payload == "user1"){
        const mongo = new MongoDB()
        const test = await mongo.MongoSave(req.body, EmployeeModel)
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
const updateEmployee = async (req: Request, res: Response) => {
    try{
        const mongo = new MongoDB()
        const update = await mongo.MongoUpdate(req.body, EmployeeModel)
        res.status(200).send(update)
    }catch{
        res.status(404).send('Cannot update tag of id: ' + req.body)
    }
  }

const deleteEmployee = (req: Request, res: Response) => {
    try{
        const mongo = new MongoDB()
        const test = mongo.MongoDelete(req.body,EmployeeModel)
        res.status(200).send(test);
    }catch{
        res.send('Error: Cant delete tag of id: ' + req.body)
    }
  }

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
}