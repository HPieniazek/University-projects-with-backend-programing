import mongoose from "mongoose";
import {TagSchema} from './TagSchema';

const employeeSchema = new mongoose.Schema({
    id:      {type: String, required : true},
    name:    {type: String, required : true},
    surname: {type: String, required : true},
    comment: {type: String, required : false},
    tags:    {type: [TagSchema], required : false}
}, {
    timestamps: true
})

export const EmployeeSchema = mongoose.model('tag', employeeSchema);
