export class Lawyer {
    public _id: string;
    public firstName: string ;
    public familyName: string;
    public age: number ;
    public adress: string ;
    public email: string ;
    public speciality: string;
    public description: string;
    public phoneNumber: string ;
    public image: string ;
    

    constructor(_id: string, firstName:string, familyName:string, age: number, adress: string, email: string,speciality: string, description:string, phoneNumber: string, image: string){
        this._id= _id;  
        this.firstName = firstName;
        this.familyName = familyName;
        this.age = age;
        this.adress = adress;
        this.email = email;
        this.speciality = speciality;
        this.description = description;
        this.phoneNumber = phoneNumber;
        this.image = image
       
     }

     
 }