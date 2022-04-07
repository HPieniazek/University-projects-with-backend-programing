class Note {
    title: string;
    content: string;
    createDate?: Date;
    tags?: string[];
    id?: number;
    userID?: number;

    constructor (note: Note){
        this.title      = note.title || "New note";
        this.content    = note.content || "";
        this.createDate = new Date();
        this.tags       = note.tags || [];
        this.id         = note.id || Date.now(); 
        this.userID     = note.userID || Date.now();
    }
}

class Tag{
    name: string;
    id?: number;
    userID?: number;

    constructor(tag: Tag){
        this.name   = tag.name;
        this.id     = Date.now();
        this.userID = tag.userID;
    }
}

class User{
    login: string;
    password: string;
    id?: number;

    constructor(user: User){
        this.login    = user.login;
        this.password = user.password;
        this.id       = user.id;
    }
}

export {Note, Tag, User};