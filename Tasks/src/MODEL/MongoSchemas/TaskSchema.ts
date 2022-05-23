import mongoose from "mongoose";
import {TagModel} from './TagSchema';
import {EmployeeModel} from './EmployeeSchema';
import {ClientModel} from './ClientSchema';

const taskSchema = new mongoose.Schema({
    id:       {type: String, required : true},
    name:     {type: String, required : true},
    start:    {type: Date, required : true},
    end:      {type: Date, required : true},
    content:  {type: String, required : false},
    tags:     {type: [TagModel], required : true},
    employee: {type: EmployeeModel, required : true},
    client:   {type: [ClientModel], required : true}
}, {
    timestamps: true
})
export const TaskModel = mongoose.model('task', taskSchema)
