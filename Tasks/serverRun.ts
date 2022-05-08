import express from 'express'
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import {Tag, Product, Client, Company, Task, Employee, User} from './src/MODEL/classes';
import { stringify } from 'querystring';

const app = express()

app.use(express.json());
app.use(express.Router());

const login = require('./src/CONTROLLERS/login/login.ts');
const task = require('./src/CONTROLLERS/Task/taskRouting');
const tags = require('./src/CONTROLLERS/Tag/tagRouting.ts');

app.use('/login', login)
app.use('/task', task)
app.use('/tag', tags)




app.listen(3000, () => console.log("Server started..."));