class Note {
    title: string;
    content: string;
    createDate?: Date;
    tags?: string[];
    id?: number;

    constructor (note: Note){
        this.title      = note.title || "New note";
        this.content    = note.content || "";
        this.createDate = new Date();
        this.tags       = note.tags || [];
        this.id         = note.id || Date.now(); 
    }
}

class Tag{
    name: string
    id?: number

    constructor(tag: Tag){
        this.name = tag.name;
        this.id   = Date.now() || tag.id;
    }
}

class User{
    login: string;
    password: string;

    constructor(user: User){
        this.login    = user.login;
        this.password = user.password;
    }
}

export {Note, Tag, User};