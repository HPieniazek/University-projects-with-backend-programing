import mongoose from "mongoose";



const tagSchema = new mongoose.Schema({
    id:     {type: String, required : true},
    header: {type: String, required : true},
    userID: {type: String, required : true, default:[]}
}, {
    timestamps: true
})
export const TagSchema = mongoose.model('tag', tagSchema);
