export class Case {
    public name: string;
     public description: string;
     public clientName: string;
     public etat: string;
     public todos : string[];
     constructor(name:string, desc: string, clientName: string, etat: string, todos: string[]){
         this.name= name;
         this.description= desc;
         this.clientName=clientName;
         this.etat=etat;
         this.todos= todos;
     }
 }