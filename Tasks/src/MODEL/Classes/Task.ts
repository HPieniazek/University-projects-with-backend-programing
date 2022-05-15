import {randomUUID} from 'crypto';
import {Employee} from "./Employee";
import {Client} from "./Client";
import {Tag} from "./Tag"

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
export {Task}