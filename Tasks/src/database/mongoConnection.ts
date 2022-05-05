import express from 'express';
import mongoose from "mongoose";
import 'dotenv/config' 
require('dotenv').config({ path: '../.env' })
const app = express()

const connString = 'mongodb+srv://HubPi:1234@hub-pab.c5efk.mongodb.net/Task?retryWrites=true&w=majority'

main()
async function main() {
    console.log('Connecting to mongo');
    mongoose.connect(connString)
    const db = mongoose.connection
    db.on('error', (error) => console.log("db.on()", error))
    db.once('open', () => console.log("Connect to database"))

}
app.listen(3000, () => console.log("Server started..."));