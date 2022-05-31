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

    async MongoSave(data: any, Schema: any) {
        const newParam = new Schema(data);
        try{
            const save = await newParam.save();
            this.MongoDisconnect()
            return save;
        }catch(err:any){
            throw  err.message;
        }
    }
    
    async FindByName(data: any, Schema: any){
        try{
            const getOne= await Schema.findOne({"name":data.name}).exec()
            this.MongoDisconnect()
        }catch{
            throw new Error;
        }
    }
    async FindByDate(data: any, Schema:any){
        try{
            const getOne= await Schema.findOne({"date":data.date}).exec()
            this.MongoDisconnect()
        }catch{
            throw new Error;
        }
    }
    

    async MongoDelete(data: any, Schema: any){
        const NewParam = new Schema(data);
        try {
            const deleteOne = await NewParam.deleteOne();
            this.MongoDisconnect()
            return deleteOne
        } catch {
            return console.error(error);
        }
        
    }
    
    async MongoFind( Schema: any){
        try {
            const find = await Schema.find({});
            this.MongoDisconnect()
            return find;
        } catch {
            console.error(error);
        }
        
    }
    async MongoFindOne(data: any, Schema: any){
        try{
            const getOne= await Schema.findOne({"name":data.name}).exec()
            this.MongoDisconnect()
        }catch{
            throw new Error;
        }
    }

    async MongoUpdate(data: any, Schema: any){
        const NewParam = new Schema(data);
        try {
            const update = await NewParam.updateOne();
            this.MongoDisconnect()
            return update;
        } catch {
            return console.error(error);
        }
    }

    MongoDisconnect(){
        mongoose.disconnect()
        console.log("Databese is disconnected")
    }
}
