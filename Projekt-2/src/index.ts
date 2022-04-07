import express from 'express'
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import {Note, Tag, User} from './classes';
import { stringify } from 'querystring';

const app = express()

const userList: User[] = [];
userList.push(new User({login:"login", password:"password" }));

app.use(express.json());
app.use(express.Router());

const notes = require('./Notes/notes');
const tags = require('./Tags/tags');

app.use('/note', notes)
app.use('/tag', tags)

//--------------------------LOGIN--------------------------------
const user1 = "user1";
const password1 = "password1";

app.post('/login', function (req: Request, res: Response) {
  try{
    const user = new User ({login: req.body.login, password: req.body.password, id: req.body.id});
    if(user.login == user1 && user.password == password1){
      userList.push(user);
    
      const payload = user.login;
      const secret  = user.password;
      const token   = jwt.sign(payload, secret)
      
      res.status(200).send(token);
    
    }else{
      res.status(400).send("error");
    }
    
  
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