import express from 'express'
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import {Note, Tag, User} from './classes';
import { stringify } from 'querystring';

const app = express()

const noteList: Note[] = [];
const tagList: Tag[] = [];
const userList: User[] = [];


noteList.push(new Note({title:"titletest", content:"TestContent" }));
userList.push(new User({login:"login", password:"password" }));


app.use(express.json())

app.get('/note/:id', function (req: Request, res: Response) {
  try{
      const note = noteList.find(note => note.id === Number(req.params.id))
      res.status(200).send(note)
  }
  catch{
      res.status(404).send('Error: Cannot find note of id: ' + req.params.id)
  }
})

app.post('/note', function (req: Request, res: Response) {
  try{
    noteList.push(new Note ({title: req.body.title, content: req.body.content}));
    res.status(200).send(noteList);
  }catch{
    res.status(400).send("Error: check your note");
  }
})

app.put('/note/:id', function (req: Request, res: Response) {
  try{
    const note = noteList.find(note => note.id === Number(req.params.id));
    const updateNote = new Note(req.body.note);
    const index = noteList.findIndex(note => note.id === Number(req.params.id));
    noteList[index] = updateNote;
    res.status(200).send(updateNote);
  }catch{
    res.status(404).send("Error: check your note");
  }
})

app.delete('/note/:id', function (req: Request, res: Response) {
  try{
    const index = noteList.findIndex(note => note.id === Number(req.params.id))
    noteList.splice(index, 1)
    res.status(204).send(noteList)
  }catch{
    res.status(400).send("Error: check your note id");
  }
});


//-----------------------TAGS---------------------------------


app.get('/tags', function (req: Request, res: Response) {
  try{
      
      res.status(200).send(tagList)
  }
  catch{
      res.status(404).send('Error: check your tag')
  }
})


app.post('/tags', function (req: Request, res: Response) {
  try{
    const tag = new Tag(req.body.tag)
    tagList.push(tag)
    res.send(tag)
       
  }catch{
    res.status(400).send("Error: check your tag");
  }
})


app.delete('/tags/:id', (req: Request, res: Response) => {
  try{
      const index = tagList.findIndex(tag => tag.id === Number(req.params.id))
      tagList.splice(index, 1)
      res.send(tagList)
     
  }
  catch{
      res.send('Error: Cant delete tag of id: ' + req.params.id)
  }
})


app.put('/tags/:id', (req: Request, res: Response) => {
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
//--------------------------LOGIN--------------------------------
const user1 = "user1";
const password1 = "password1";

app.post('/login', function (req: Request, res: Response) {
  try{
    const user = new User ({login: req.body.login, password: req.body.password});
    userList.push(user);
    
    const payload = req.body.login;
    const secret  = req.body.password;
    const token   = jwt.sign(payload, secret)
    
    res.status(200).send(token);
      
  }catch{
    res.status(401).send("Error: check your login and password");
  }
})
//const payload = req.body.userLogin;
//const secret  = req.body.password;

//const authData = req.heders.authorization;
//const token = authData?.split(' ')[1] ?? '';
//const payload = jwt.verify(token,secret);

app.listen(3000)