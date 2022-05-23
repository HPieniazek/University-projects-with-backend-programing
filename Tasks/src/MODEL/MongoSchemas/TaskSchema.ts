import mongoose from "mongoose";
import Schema from "mongoose";


const taskSchema = new mongoose.Schema({
    id:       {type: String, required : true},
    name:     {type: String, required : true},
    start:    {type: Date, required : true},
    end:      {type: Date, required : true},
    content:  {type: String, required : false},
    tags:     {type: Schema.Types.ObjectId, ref: 'tag' },
    employee: {type: Schema.Types.ObjectId, ref: 'employee' },
    client:   {type: Schema.Types.ObjectId, ref: 'client' }
}, {
    timestamps: true
})
export const TaskModel = mongoose.model('task', taskSchema)
