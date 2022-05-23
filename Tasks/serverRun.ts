import express from 'express'
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import { stringify } from 'querystring';

const app = express()

app.use(express.json());
app.use(express.Router());

const login = require('./src/CONTROLLERS/login/login.ts');
const task = require('./src/CONTROLLERS/Task/taskRouting');
const tags = require('./src/CONTROLLERS/Tag/tagRouting.ts');
const client = require('./src/CONTROLLERS/Client/clientRouting.ts');
const product = require('./src/CONTROLLERS/Product/productRouting.ts');
const employee = require('./src/CONTROLLERS/Employee/employeeRouting.ts');
const user = require('./src/CONTROLLERS/User/userRouting.ts');
const company = require('./src/CONTROLLERS/Company/companyRouting.ts');

app.use('/login', login)
app.use('/task', task)
app.use('/client', client)
app.use('/product', product)
app.use('/employee', employee)
app.use('/user', user)
app.use('/company', company)
app.use('/tags', tags)




app.listen(3000, () => console.log("Server started..."));