const TagSchema = require('./../MODEL/classes')
import {Tag} from './../../MODEL/classes';
import { mainDB } from "../database/mongoConnection";
import {checkToken} from '../login/token';
import {randomUUID} from 'crypto';
import {Request, Response} from 'express'
import {FileService} from './../../SERVICE/service';
const dataTagsFile = require("./dataTagsFile.json");

const tagList: Tag[] = [];
let user =  new Tag( { id: randomUUID() } )
tagList.push();
// TODO zapis i odczyt do pliku 



const getTags = (req: Request, res: Response) => {
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
}

const getTag = (req: Request, res: Response) => {
    let user1 =  new Tag( { id: randomUUID() } )
    //mainDB(user1);   => dodać metody dla kazdego modelu
    res.status(200).send("OK")
}

const createTag = (req: Request, res: Response) => {
    try{
        const tag = new Tag(req.body);
        tagList.push(tag);
        const updateTagsList = new FileService (dataTagsFile,tagList);
        updateTagsList.updateStorage();
        res.send(tagList);
           
      }catch{
        res.status(400).send("Error: check your tag");
      }
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).send({ success: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
}

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getTag,
  getTags
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
}