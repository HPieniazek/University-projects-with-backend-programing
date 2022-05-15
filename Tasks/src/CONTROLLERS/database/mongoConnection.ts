import express from 'express';
import mongoose from "mongoose";
import 'dotenv/config' 
import * as mongoModels from './../../MODEL/mongoModels'
//import { Tag } from '../../MODEL/classes';
//require('dotenv').config({ path: '../.env' })

const app = express();

const connString = 'mongodb+srv://HubPi:1234@hub-pab.c5efk.mongodb.net/Task?retryWrites=true&w=majority'

const Schemas = require("./../../MODEL/mongoModels")


export async function mainDB(data: any, schema:any) {
    console.log('Connecting to mongo');
    mongoose.connect(connString)
    const db = mongoose.connection
    db.on('error', (error) => console.log("db.on()", error))
    db.once('open', () => console.log("Connect to database"))

    // TODO -> zrobić modele dla innych klas 
    // logika user => emploeey && client

    const newSchema = new mongoose.Schema(schema)
    console.log((data.constructor.name))
    // 3. Akcje - dodawanie wpisu


    const newTag = new newSchema(schema)

    const saveRet = await newTag.save(); // także .update(), .updateMany(), .validate()
    console.log('SAVE - new note id: ', newTag.id);

   

  
    // 7. AKCJE - odpytywanie o kolekcję
     const notes = await tagModel.find();
     console.log(`NOTES Colection ${notes.length}:`, notes)
}
