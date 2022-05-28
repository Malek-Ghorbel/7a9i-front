export class Case {
    public id: string;
    public name: string;
    public idClient: string;
    public idLawyer: string;
     public description: string;
     public etat: string;
     public todos : string[];
     constructor(id: string, name:string, idClient:string, idLawyer:string, desc: string, etat: string, todos: string[]){
        this.id= id;  
        this.name= name;
        this.idClient= idClient;
        this.idLawyer= idLawyer;
         this.description= desc;
         this.etat=etat;
         this.todos= todos;
     }
 }