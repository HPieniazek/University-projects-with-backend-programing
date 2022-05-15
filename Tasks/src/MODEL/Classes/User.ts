import {randomUUID} from 'crypto';

class User{
    login: string;
    password: string;
    id?: string;

    constructor(user: User){
        this.login    = user.login ;
        this.password = user.password;
        this.id       = user.id || randomUUID();
    }
}
export{User}