import express from 'express'
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import {Tag, Product, Client, Company, Task, Employee, User} from './src/class/classes';
import { stringify } from 'querystring';

const app = express()

app.use(express.json());
app.use(express.Router());

const login = require('./src/login/login.ts');
const task = require('./src/router/Task/taskRouting');
const tags = require('./src/router/Tag/tagRouting.ts');

app.use('/login', login)
app.use('/task', task)
app.use('/tag', tags)




app.listen(3000, () => console.log("Server started..."));