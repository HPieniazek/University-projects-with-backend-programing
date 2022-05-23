import mongoose from "mongoose";
import {TagModel} from './TagSchema';

const clientSchema = new mongoose.Schema({
    id:          {type: String, required : true},
    name:        {type: String, required : true},
    surname:     {type: String, required : true},
    comment:     {type: String, required : false},
    tags:        {type: [TagModel], required : false}
}, {
    timestamps: true
})
export const ClientModel = mongoose.model('client', clientSchema);
