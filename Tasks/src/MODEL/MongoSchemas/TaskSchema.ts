import mongoose from "mongoose";
import Schema from "mongoose";
import {EmployeeModel} from './EmployeeSchema'
import {ClientModel} from './ClientSchema'
import {TagModel} from './TagSchema'


const taskSchema = new mongoose.Schema({
    id:{
        type: String,
        required : true,
        default:""
    },
    name:{
        type: String, 
        required : true, 
        default:""
    },
    start:{
        type: String, 
        required : true, 
        default:""
    },
    end:{
        type: String, 
        required : true, 
        default:""
    },
    content:{
        type: String, 
        required : true, 
        default:""
    },
    tags:{
        type: Schema.Types.ObjectId, 
        ref: 'tags'
    },
    employee:{
        type: Schema.Types.ObjectId, 
        ref: 'employee',
        required: [false, "Enter employee id"] 
    },
    client:{
        type: Schema.Types.ObjectId,
        ref: 'client'
    }
}, {
    timestamps: true
})
export const TaskModel = mongoose.model('task', taskSchema)
