import express from 'express'
import {Request, Response} from 'express'
import {Note, Tag} from './src/classes';

const app = express()

class Note {
    title: string;
    content: string;
    createDate?: Date;
    tags?: string[];
    id?: number;

    constructor (note: Note){
        this.title      = note.title || "New note";
        this.content    = note.content || "";
        this.createDate = new Date();
        this.tags       = note.tags || [];
        this.id         = note.id || Date.now(); 
    }
}

const noteList: Note[] = [];
const tagList: Tag[] = [];


noteList.push(new Note({title:"titletest", content:"TestContent" }));



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


app.listen(3000)