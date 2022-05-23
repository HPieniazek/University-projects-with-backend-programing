import mongoose from "mongoose";
import Schema from "mongoose";


const productSchema = new mongoose.Schema({
    id:      {type: String, required : true},
    name:    {type: String, required : true},
    comment: {type: String, required : true},
    tag:     {type: Schema.Types.ObjectId, ref: 'tag' }
}, {
    timestamps: true
})
export const ProductSchema = mongoose.model('product', productSchema);
