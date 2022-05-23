import mongoose from "mongoose";
import {TagModel} from './TagSchema';

const employeeSchema = new mongoose.Schema({
    id:      {type: String, required : true},
    name:    {type: String, required : true},
    surname: {type: String, required : true},
    comment: {type: String, required : false},
    tags:    {type: [TagModel], required : false}
}, {
    timestamps: true
})

export const EmployeeModel = mongoose.model('employee', employeeSchema);
