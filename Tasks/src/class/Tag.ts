class Tag{
    id:     string;
    header: string;
    userID: string[]

    constructor(tag:Tag){
        this.id     = tag.id;
        this.header = tag.header;
        this.userID = tag.userID;
    }
}
export {Tag};