import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    id:     {type: String, required : false},
    header: {type: String, required : false},
    userID: {type: [String], required : false, default:[]}
}, {
    timestamps: true
})
export const TagSchema = mongoose.model('tag', tagSchema);
