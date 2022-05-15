import {randomUUID} from 'crypto';
import mongoose from "mongoose";
import {Tag} from "./Tag"

class Product{
    id:      string
    name:    string
    comment: string
    tag?:    Tag[]
    constructor(product: Product){
        this.id      = product.id;
        this.name    = product.name
        this.comment = product.comment
        this.tag     = product.tag
    }
}
export{Product}