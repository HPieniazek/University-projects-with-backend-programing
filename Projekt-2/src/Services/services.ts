import fs from 'fs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import {Note, Tag, User} from '../classes';

const notes = require('./Notes/notes');
const tags = require('./Tags/tags');

const dataNotesFile = '../Notes/dataNotesFile.json';
const dataTagsFile = '../Tags/dataTagsFile.json';

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
          await fs.promises.writeFile(dataNotesFile, JSON.stringify(data));
        } catch (err) {
          console.log(err);
        }
      }
      public async readNoteStorage(): Promise<void> {
        try {
          const data = await fs.promises.readFile(dataNotesFile, 'utf-8');
          let noteData = JSON.parse(data).notes;
        } catch (err) {
          console.log(err);
        }
      }
      public async updateTagStorage(): Promise<void> {
        const data =  tags ;
        try {
          await fs.promises.writeFile(dataTagsFile, JSON.stringify(data));
        } catch (err) {
          console.log(err);
        }
      }
      public async readTagStorage(): Promise<void> {
        try {
          const data = await fs.promises.readFile(dataTagsFile, 'utf-8');
          let tagsData = JSON.parse(data).tags;
        } catch (err) {
          console.log(err);
        }
      }
    }

