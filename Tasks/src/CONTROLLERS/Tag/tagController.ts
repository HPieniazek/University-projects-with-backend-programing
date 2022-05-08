import express from 'express'
//const Tag = require('./p2p-server');
import {Tag} from './../../MODEL/classes';
import { mainDB } from "../database/mongoConnection";
import {checkToken} from '../login/token';
import {randomUUID} from 'crypto';
import {Request, Response} from 'express'
import {FileService} from '../../SERVICE/FileService';
const dataTagsFile = (__dirname)+'/dataTagsFile.json';
const tagList: Tag[] = [];
// TODO zapis i odczyt do pliku 


const app = express()
app.use(express.json());

const getTags = (req: Request, res: Response) => {
    try{ 
        const payload = checkToken(req);
        if(payload == "user1"){
          const readTagsList = new FileService (dataTagsFile,tagList);
          const readedFile = readTagsList.readStorage()
          console.log(readedFile)//tu jest dobrze
          res.status(200).send(readedFile)//__________________________________czemu zwraca pustą tablice 

        }else{
          res.status(400).send("error");
        }
    }catch{
          res.status(404).send('Error: check your tag');
    }
}

const getTag = (req: Request, res: Response) => {
    
   
}

const createTag = (req: Request, res: Response) => {
  try{ 
      const payload = checkToken(req);
      if(payload == "user1"){
        console.log("try")
        const tag = new Tag(req.body);
        //console.log(tag)
        tagList.push(tag);
        
        const updateTagsList = new FileService (dataTagsFile,tagList);
        updateTagsList.updateStorage();
        console.log(updateTagsList)
        res.status(201).send(tagList);
      }else{
          res.status(400).send("error");
      }
    }catch{
        res.status(400).send("Error: check your tag");
    }
}

const updateTag = (req: Request, res: Response) => {
    try{
        let foundTag = tagList.find(tag => tag.id === String(req.params.id))
        if(foundTag){
            foundTag = new Tag({...foundTag, ...req.body.tag})
            console.log(foundTag)
            console.log(req.body.tag)
            res.status(200).send(foundTag)
        }else{
            res.status(404).send('tag not found')
        }
        
    }
    catch{
        res.send('Cannot update tag of id: ' + req.params.id)
    }
  }

const deleteTag = (req: Request, res: Response) => {
    try{
        const index = tagList.findIndex(tag => tag.id === String(req.params.id))
        tagList.splice(index, 1)
        const updateTagsList = new FileService (dataTagsFile,tagList);
        updateTagsList.updateStorage();
        res.send(tagList)
       
    }
    catch{
        res.send('Error: Cant delete tag of id: ' + req.params.id)
    }
  }

module.exports = {
  getTag,
  getTags,
  createTag,
  updateTag,
  deleteTag,
}