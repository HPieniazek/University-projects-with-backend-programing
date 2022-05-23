import mongoose from "mongoose";
import {TagModel} from './TagSchema';

const productSchema = new mongoose.Schema({
    id:      {type: String, required : true},
    name:    {type: String, required : true},
    comment: {type: String, required : true},
    tag:     {type: [TagModel], required : true}
}, {
    timestamps: true
})
export const ProductSchema = mongoose.model('product', productSchema);
