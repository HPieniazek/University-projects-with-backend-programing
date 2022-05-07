import express from 'express'
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import {User} from './../class/classes';

const router = express.Router();


const user1 = "user1";
const password1 = "password1";
const userList: User[] = [];
userList.push(new User({login:"login", password:"password" }));

router.post('', function (req: Request, res: Response) {
  try{
    const user = new User ({login: req.body.login, password: req.body.password});
    console.log(user1)
    console.log(user)
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
module.exports = router;