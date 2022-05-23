import mongoose from "mongoose";
import Schema from "mongoose";

const userSchema = new mongoose.Schema({
    id:          {type: String, required : true },
    name:        {type: String, required : true },
    surname:     {type: String, required : true },
    comment:     {type: String, required : false },
    tags:        {type: Schema.Types.ObjectId, ref: 'tag' }
}, {
    timestamps: true
})
export const UserSchema = mongoose.model('user', userSchema);
