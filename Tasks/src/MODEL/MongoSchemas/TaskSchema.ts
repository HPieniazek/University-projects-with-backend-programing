import mongoose from "mongoose";
import Schema from "mongoose";
import {EmployeeModel} from './EmployeeSchema'
import {ClientModel} from './ClientSchema'
import {TagModel} from './TagSchema'


const taskSchema = new mongoose.Schema({
    id:       {type: String},
    name:     {type: String},
    start:    {type: String, required : false, default:""},
    end:      {type: String, required : false, default:""},
    content:  {type: String, required : false, default:""},
    tags:     {type: Schema.Types.ObjectId, ref: 'tag'},
    employee: {type: Schema.Types.ObjectId, ref: 'employee'},
    client:   {type: Schema.Types.ObjectId, ref: 'client' }
}, {
    timestamps: true
})
export const TaskModel = mongoose.model('task', taskSchema)
