import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    id:     {type: String, required : true},
    header: {type: String, required : true},
    userID: {type: [String], required : false, default:[]}
}, {
    timestamps: true
})
export const TagModel = mongoose.model('tag', tagSchema);
