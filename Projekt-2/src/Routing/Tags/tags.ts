import express from "express";
import {Request, Response} from 'express'
import {Tag} from '../../classes';
import {FileService} from '../../Services/services';
import {checkToken} from '../../Services/token';

const router = express.Router();
const dataTagsFile = '../Notes/dataTagsFile.json';

const tagList: Tag[] = [];
tagList.push(new Tag({name:"titletest"}));



//____________Routing_________________//
router.get('/', function (req: Request, res: Response) {
    try{
      const payload = checkToken(req);  
      if(payload == "user1"){
        res.status(200).send(tagList)
      }else{
        res.status(400).send("error");
      }
    }catch{
        res.status(404).send('Error: check your tag');
    }
  })
  
  
router.post('/', function (req: Request, res: Response) {
    try{
      const tag = new Tag(req.body);
      tagList.push(tag);
      const updateTagsList = new FileService (dataTagsFile,tagList);
      updateTagsList.updateStorage();
      res.send(tagList);
         
    }catch{
      res.status(400).send("Error: check your tag");
    }
  })
  
  
router.delete('/:id', (req: Request, res: Response) => {
    try{
        const index = tagList.findIndex(tag => tag.id === Number(req.params.id))
        tagList.splice(index, 1)
        const updateTagsList = new FileService (dataTagsFile,tagList);
        updateTagsList.updateStorage();
        res.send(tagList)
       
    }
    catch{
        res.send('Error: Cant delete tag of id: ' + req.params.id)
    }
  })
  
  
router.put('/:id', (req: Request, res: Response) => {
    try{
        let foundTag = tagList.find(tag => tag.id === Number(req.params.id))
        if(foundTag){
            foundTag = new Tag({...foundTag, ...req.body.tag})
            res.status(200).send(foundTag)
        }else{
            res.status(404).send('tag not found')
        }
        
    }
    catch{
        res.send('Cannot update tag of id: ' + req.params.id)
    }
  })