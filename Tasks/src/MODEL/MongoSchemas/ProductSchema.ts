import mongoose from "mongoose";
import {TagSchema} from './TagSchema';

const productSchema = new mongoose.Schema({
    id:      {type: String, required : true},
    name:    {type: String, required : true},
    comment: {type: String, required : true},
    tag:     {type: [TagSchema], required : true}
}, {
    timestamps: true
})
export const ProductSchema = mongoose.model('tag', productSchema);
