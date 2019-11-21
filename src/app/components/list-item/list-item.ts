export class ListItem {
    public children: ListItem[] = [];
    public openSublist: boolean = false;
    public createdAt: Date;
    constructor(
        public text: string,
    ){
        this.createdAt = new Date();
    }
}