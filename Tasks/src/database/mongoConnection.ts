import express from 'express';
import mongoose from "mongoose";
import 'dotenv/config' 

import { Tag } from '../class/classes';
require('dotenv').config({ path: '../.env' })
const app = express()

const connString = 'mongodb+srv://HubPi:1234@hub-pab.c5efk.mongodb.net/Task?retryWrites=true&w=majority'

const tagSchema = new mongoose.Schema({
    id:     String,
    header: String,
    userID: String
}, {
    timestamps: true
})


export async function mainDB(param: any) {
    console.log('Connecting to mongo');
    mongoose.connect(connString)
    const db = mongoose.connection
    db.on('error', (error) => console.log("db.on()", error))
    db.once('open', () => console.log("Connect to database"))

    // TODO -> zrobić modele dla innych klas 


    const tagModel = mongoose.model('tag', tagSchema)
    console.log((param.constructor.name))
    // 3. Akcje - dodawanie wpisu
    const newNote = new tagModel({
        title: 'New note',
        content: 'From mongoose',
        private: "id",
       
    })

    const saveRet = await newNote.save(); // także .update(), .updateMany(), .validate()
    console.log('SAVE - new note id: ', newNote.id);

   

  
    // 7. AKCJE - odpytywanie o kolekcję
     const notes = await tagModel.find();
     console.log(`NOTES Colection ${notes.length}:`, notes)

  

}
