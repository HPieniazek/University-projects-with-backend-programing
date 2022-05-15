import mongoose from "mongoose";
import {TagSchema} from './TagSchema';

const clientSchema = new mongoose.Schema({
    id:          {type: String, required : true},
    name:        {type: String, required : true},
    surname:     {type: String, required : true},
    comment:     {type: String, required : false},
    tags:        {type: [TagSchema], required : false}
}, {
    timestamps: true
})
export const ClientSchema = mongoose.model('tag', clientSchema);
