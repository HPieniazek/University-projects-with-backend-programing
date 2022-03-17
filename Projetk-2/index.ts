import express from 'express'
import {Request, Response} from 'express'

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

noteList.push(new Note({title:"titletest", content:"TestContent" }));



app.use(express.json())

app.get('/', function (req: Request, res: Response) {
  res.send(noteList)
})

app.post('/post', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title 
  res.status(200).send(req.body)
})

app.put('/post', function (req: Request, res: Response) {
    console.log(req.body) // e.x. req.body.title 
    res.status(200).send('PUT Hello World')
  })

app.delete('/post', function (req: Request, res: Response) {
console.log(req.body) // e.x. req.body.title 
res.status(200).send('DELETE Hello World')
})

app.listen(3000)