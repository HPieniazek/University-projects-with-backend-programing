import mongoose from "mongoose";
import {TagModel} from './TagSchema';

const userSchema = new mongoose.Schema({
    id:          {type: String, required : true },
    name:        {type: String, required : true },
    surname:     {type: String, required : true },
    comment:     {type: String, required : false },
    tags:        {type: [TagModel], required : false}
}, {
    timestamps: true
})
export const UserSchema = mongoose.model('user', userSchema);
