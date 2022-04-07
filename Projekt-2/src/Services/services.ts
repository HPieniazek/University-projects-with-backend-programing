import fs from 'fs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import {Note, Tag, User} from '../classes';
const notes = require('./Notes/notes');
const tags = require('./Tags/tags');

const storeNoteFile = '../Notes/dataNotesFile.json';
const storeTagFile = '../Tags/dataTagsFile.json';

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

class Service {
      public async updateNoteStorage(): Promise<void> {
        const data = { notes };
        try {
          await fs.promises.writeFile(storeNoteFile, JSON.stringify(data));
        } catch (err) {
          console.log(err);
        }
      }
      public async readNoteStorage(): Promise<void> {
        try {
          const data = await fs.promises.readFile(storeNoteFile, 'utf-8');
          notes = JSON.parse(data).notes;
        } catch (err) {
          console.log(err);
        }
      }
      public async updateTagStorage(): Promise<void> {
        // to do: parametry
        const data = { tags };
        try {
          await fs.promises.writeFile(storeTagFile, JSON.stringify(data));
        } catch (err) {
          console.log(err);
        }
      }
      public async readTagStorage(): Promise<void> {
        try {
          const data = await fs.promises.readFile(storeTagFile, 'utf-8');
          tags = JSON.parse(data).tags;
        } catch (err) {
          console.log(err);
        }
      }
    }

