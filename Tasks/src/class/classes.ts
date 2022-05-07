import {randomUUID} from 'crypto';


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
class User{
    login: string;
    password: string;
    id?: number;

    constructor(user: User){
        this.login    = user.login || randomUUID();
        this.password = user.password;
        this.id       = user.id;
    }
}

export {Tag, Product, Client, Company, Task, Employee, User};