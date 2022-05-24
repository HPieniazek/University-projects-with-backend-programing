import express from 'express';
import mongoose from "mongoose";
import 'dotenv/config' 
import { error } from 'console';
//import { Tag } from '../../MODEL/classes';
//require('dotenv').config({ path: '../.env' })

const app = express();

export class MongoDB {
    connString:string = 'mongodb+srv://HubPi:1234@hub-pab.c5efk.mongodb.net/Task?retryWrites=true&w=majority'

    constructor(connString:string = 'mongodb+srv://HubPi:1234@hub-pab.c5efk.mongodb.net/Task?retryWrites=true&w=majority'){
        this.connString = connString;
        console.log('Connecting to mongo');
        mongoose.connect(this.connString)
        const db = mongoose.connection
        db.on('error', (error) => console.log("db.on()", error))
        db.once('open', () => console.log("Connect to database"))
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
        console.log(newParam)
        const saveRet = await newParam.save().catch(error);
        console.log('SAVE - new : ',saveRet);
    }

    async MongoDelete(data: any, schema: any){
        const newParam = new schema(data);
        console.log('SAVE - new : ');
        try {
            const saveRet = await newParam.deleteOne();
            
            console.log('DELETE : ',saveRet);
        } catch {
            console.error(error);
        }
        
    }
    
    async MongoFind( schema: any){
        const newParam = new schema();
        try {
            const findRet = await schema.find({});
            console.log('FIND : ',findRet);
        } catch {
            console.error(error);
        }
        
    }
    // do poprawy razem z
    async MongoUpdate(data: any, schema: any){
        const newParam = new schema();
        try {
            const saveRet = await newParam.updateOne(data);
            console.log('updateOne : ',saveRet);
        } catch {
            console.error(error);
        }
    }
}
