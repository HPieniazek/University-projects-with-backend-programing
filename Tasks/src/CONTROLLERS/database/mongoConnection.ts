import express from 'express';
import mongoose from "mongoose";
import 'dotenv/config' 
//import { Tag } from '../../MODEL/classes';
//require('dotenv').config({ path: '../.env' })

const app = express();

const connString = 'mongodb+srv://HubPi:1234@hub-pab.c5efk.mongodb.net/Task?retryWrites=true&w=majority'

export async function mainDB(data: any, schema: any) {
    console.log('Connecting to mongo');
    mongoose.connect(connString)
    const db = mongoose.connection
    db.on('error', (error) => console.log("db.on()", error))
    db.once('open', () => console.log("Connect to database"))

    const newParam = new schema();
    
    console.log((data.constructor.name))
    // 3. Akcje - dodawanie wpisu
    
    const saveRet = await newParam.save()
    ;// także .update(), .updateMany(), .validate()
    console.log('SAVE - new note: ', data.id);

}
