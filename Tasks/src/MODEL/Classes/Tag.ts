import {randomUUID} from 'crypto';
import mongoose from "mongoose";

class Tag{
    id:      string;
    header?: string;
    userID?: string[];

    constructor(tag:Tag){
        this.id     = tag.id || randomUUID();
        this.header = tag.header || "Title";
        this.userID = tag.userID;
    }
}
export {Tag}