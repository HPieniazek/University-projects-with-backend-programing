import {Tag} from "./Tag"

class Client {
    id:          string;
    name:        string;
    surname:     string;
    comment?:    string;
    tags?:       Tag[]
    constructor(client:Client){
        this.id      = client.id
        this.name    = client.name;
        this.surname = client.surname;
        this.comment = client.comment;
        this.tags    = client.tags || [];
    }
}
export{Client}