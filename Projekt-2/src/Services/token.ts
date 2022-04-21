import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'

export function checkToken(req: Request){
      try{
            const authData = req.headers.authorization;
            const token = authData?.split(' ')[1] ?? '';
            const payload = jwt.verify(token,"password1");
            return payload;
      }catch{
            return "Error: Invalid Token"
      }
}