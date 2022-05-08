import {randomUUID} from 'crypto';
import mongoose from "mongoose";

// ------------TAG------------
const tagSchema = new mongoose.Schema({
    id:     {type: String, required : true},
    header: {type: String, required : true},
    userID: {type: String, required : true, default:[]}
}, {
    timestamps: true
})

class Tag{
    id:      string;
    header?: string;
    userID?: string[]

    constructor(tag:Tag){
        this.id     = tag.id || randomUUID();
        this.header = tag.header || "Title";
        this.userID = tag.userID;
    }
}
// ------------TAG------------

// ------------Product------------
const productSchema = new mongoose.Schema({
    id:      {type: String, required : true},
    name:    {type: String, required : true},
    comment: {type: String, required : true},
    tag:     {type: [tagSchema], required : true}
}, {
    timestamps: true
})

class Product{
    id:      string
    name:    string
    comment: string
    tag?:    Tag[]
    constructor(product: Product){
        this.id      = product.id;
        this.name    = product.name
        this.comment = product.comment
        this.tag     = product.tag
    }
}
// ------------Product------------


// ------------Employee------------
const employeeSchema = new mongoose.Schema({
    id:      {type: String, required : true},
    name:    {type: String, required : true},
    surname: {type: String, required : true},
    comment: {type: String, required : false},
    tags:    {type: [tagSchema], required : false}
}, {
    timestamps: true
})

class Employee{
    id:      string;
    name:    string;
    surname: string;
    comment?:string;
    tags?:   Tag[]
    constructor(employee: Employee){
        this.id      = employee.id;
        this.name    = employee.name;
        this.surname = employee.surname;
        this.comment = employee.comment;
        this.tags    = employee.tags || [];
    }
}
// ------------Employee------------

// ------------Company------------
const companySchema = new mongoose.Schema({
    name:    {type: String, required : true},
    adress:  {type: String, required : false},
    phone:   {type: String, required : true},
    nip:     {type: String, required : true},
    email:   {type: String, required : true},
    domain:  {type: String, required : true}
}, {
    timestamps: true
})

class Company{
    name:    string;
    adress?: string;
    phone:   string;
    nip:     string;
    email:   string;
    domain:  string

    constructor(company: Company){
        this.name   = company.name;
        this.adress = company.adress;
        this.phone  = company.phone;
        this.nip    = company.nip;
        this.email  = company.email;
        this.domain = company.domain;
    }
}
// ------------Company------------

// ------------Client------------
const clientSchema = new mongoose.Schema({
    id:          {type: String, required : true},
    name:        {type: String, required : true},
    surname:     {type: String, required : true},
    comment:     {type: String, required : false},
    tags:        {type: [tagSchema], required : false}
}, {
    timestamps: true
})

class Client {
    id:          string;
    name:        string;
    surname:     string;
    comment?:    string;
    tags?:       Tag[]
    constructor(client:Client){
        this.id      = client.id
        this.name    = client.name;
        this.surname = client.surname;
        this.comment = client.comment;
        this.tags    = client.tags || [];
    }
}

//------------Client------------

//------------User------------
const userSchema = new mongoose.Schema({
    id:          {type: String, required : true },
    name:        {type: String, required : true },
    surname:     {type: String, required : true },
    comment:     {type: String, required : false },
    tags:        {type: [tagSchema], required : false}
}, {
    timestamps: true
})
class User{
    login: string;
    password: string;
    id?: string;

    constructor(user: User){
        this.login    = user.login ;
        this.password = user.password;
        this.id       = user.id || randomUUID();
    }
}
// ------------TASK------------
const taskSchema = new mongoose.Schema({
    id:       {type: String, required : true},
    name:     {type: String, required : true},
    start:    {type: Date, required : true},
    end:      {type: Date, required : true},
    content:  {type: String, required : false},
    tags:     {type: [tagSchema], required : true},
    employee: {type: employeeSchema, required : true},
    client:   {type: [clientSchema], required : true}
}, {
    timestamps: true
})

class Task{
    id:       string;
    name:     string;
    start:    Date;
    end:      Date;
    content?: string;
    tags:     Tag[];
    employee: Employee;
    client:   Client[]
    constructor(task: Task){
        this.id      = randomUUID();
        this.name    = task.name;
        this.start   = task.start;
        this.end     = task.end;
        this.content = task.content|| "";
        this.tags    = task.tags || [];
        this.employee= task.employee;
        this.client  = task.client;
    }
}
// ------------TASK------------

export {Tag, Product, Client, Company, Task, Employee, User};
module.exports = {Tag, Product, Client, Company, Task, Employee, User};
module.exports = mongoose.model('TagSchema', tagSchema)
module.exports = mongoose.model('ProductSchema', productSchema)
module.exports = mongoose.model('ClientSchema', clientSchema)
module.exports = mongoose.model('CompanySchema', companySchema)
module.exports = mongoose.model('TaskSchema', taskSchema)
module.exports = mongoose.model('EmployeeSchema', employeeSchema)
module.exports = mongoose.model('UserSchema', userSchema)