import mongoose from "mongoose";

import {TagSchema} from './TagSchema';
import {EmployeeSchema} from './EmployeeSchema';
import {ClientSchema} from './ClientSchema';
const taskSchema = new mongoose.Schema({
    id:       {type: String, required : true},
    name:     {type: String, required : true},
    start:    {type: Date, required : true},
    end:      {type: Date, required : true},
    content:  {type: String, required : false},
    tags:     {type: [TagSchema], required : true},
    employee: {type: EmployeeSchema, required : true},
    client:   {type: [ClientSchema], required : true}
}, {
    timestamps: true
})
export const TaskSchema = mongoose.model('TaskSchema', taskSchema)
