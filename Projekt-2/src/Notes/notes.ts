import express from "express";
import {Request, Response} from 'express'
import {Note, Tag, User} from '../classes';
import {readFile, writeFile, writeFileSync} from 'fs';
import {checkToken, Service} from '../Services/services';

const router = express.Router();

const noteList: Note[] = [];
noteList.push(new Note({title:"titletest", content:"TestContent" }));



router.get('/:id', function (req: Request, res: Response) {
  try{
      const note = noteList.find(note => note.id === Number(req.params.id))
      res.status(200).send(note)
  }catch{
      res.status(404).send('Error: Cannot find note of id: ' + req.params.id)
  }
})

router.get('/',function(req:Request, res:Response){
  try{
      const payload = checkToken(req);  

      if(payload == "user1"){
      res.status(200).send(noteList);
      }else{
      res.status(400).send("error");
      }

  }catch{
      res.status(404).send("Cant find your notes")
  }       
})
router.post('/', function (req: Request, res: Response) {
  try{
    const payload = checkToken(req);  
    if(payload == "user1"){
      noteList.push(new Note ({title: req.body.title, content: req.body.content, userID: req.body.userID}));
      res.status(200).send(noteList);
    }else{
      res.status(400).send("error");
    }
  }catch{
    res.status(400).send("Error: check your note");
  }
})

router.put('/:id', function (req: Request, res: Response) {
  try{
    const payload = checkToken(req);  
    if(payload == "user1"){
      const note = noteList.find(note => note.id === Number(req.params.id));
      const updateNote = new Note(req.body.note);
      const index = noteList.findIndex(note => note.id === Number(req.params.id));
      noteList[index] = updateNote;
      res.status(200).send(updateNote);
    }else{
      res.status(400).send("error");
    }
  }catch{
    res.status(404).send("Error: check your note");
  }
})


router.delete('/:id', function (req: Request, res: Response) {
  try{
    const payload = checkToken(req);  
    if(payload == "user1"){
      const index = noteList.findIndex(note => note.id === Number(req.params.id))
      noteList.splice(index, 1)
      res.status(204).send(noteList)
    }else{
      res.status(400).send("error");
    }
  }catch{
    res.status(400).send("Error: check your note id");
  }
});

module.exports = router;
      