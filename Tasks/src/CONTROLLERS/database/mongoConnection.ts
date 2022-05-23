import express from 'express';
import mongoose from "mongoose";
import 'dotenv/config' 
//import { Tag } from '../../MODEL/classes';
//require('dotenv').config({ path: '../.env' })

const app = express();

export class MongoDB {
    connString:string = 'mongodb+srv://HubPi:1234@hub-pab.c5efk.mongodb.net/Task?retryWrites=true&w=majority'

    constructor(connString:string = 'mongodb+srv://HubPi:1234@hub-pab.c5efk.mongodb.net/Task?retryWrites=true&w=majority'){
        this.connString = connString;
    }

    async MongoConnection() {
        console.log('Connecting to mongo');
        mongoose.connect(this.connString)
        const db = mongoose.connection
        db.on('error', (error) => console.log("db.on()", error))
        db.once('open', () => console.log("Connect to database"))
    }

    async MongoSave(data: any, schema: any) {
        const newParam = new schema(data);
        // 3. Akcje - dodawanie wpisu
        const saveRet = await newParam.save();// także .update(), .updateMany(), .validate()
        saveRet.validate(function(error) {
            if (error)
                console.log(error);
            else
                console.log('pass validate');
        });
        console.log('SAVE - new : ');
        

    }
}
