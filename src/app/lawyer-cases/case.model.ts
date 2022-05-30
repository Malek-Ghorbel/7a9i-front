export class Case {
    public _id: string;
    public type: string;
    public clientEmail: string;
    public lawyerEmail: string;
    public date: Date;
    public description: string;
    public status: string;
    public todos : string[];

    constructor(_id: string, type:string, clientEmail:string, lawyerEmail:string, date:Date, desc: string, status: string, todos: string[]){
        this._id= _id;  
        this.type= type;
        this.clientEmail= clientEmail;
        this.lawyerEmail= lawyerEmail;
        this.date= date;
         this.description= desc;
         this.status=status;
         this.todos= todos;
     }
 }