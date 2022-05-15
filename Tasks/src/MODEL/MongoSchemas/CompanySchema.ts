import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:    {type: String, required : true},
    adress:  {type: String, required : false},
    phone:   {type: String, required : true},
    nip:     {type: String, required : true},
    email:   {type: String, required : true},
    domain:  {type: String, required : true}
}, {
    timestamps: true
})
export const CompanySchema = mongoose.model('tag', companySchema);
