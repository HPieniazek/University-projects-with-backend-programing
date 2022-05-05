import {Tag} from '.././class/Tag';

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
export {Employee};