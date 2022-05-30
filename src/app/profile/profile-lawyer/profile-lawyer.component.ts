import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-lawyer',
  templateUrl: './profile-lawyer.component.html',
  styleUrls: ['./profile-lawyer.component.scss']
})
export class ProfileLawyerComponent implements OnInit {
  lawyer={
    firstName:"",
    familyName:"",
    age:"",
    adress:"",
    email:"",
    speciality:"",
    description:"",
    image:"",
  }
  

  constructor(private http: HttpClient) { }

  token : string | null ="" ;
  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.token =localStorage.getItem("token");
    this.http.get('http://localhost:3000/auth-lawyer/lawyerInfo/'+this.token)
    .subscribe((result :any)  => {
      console.log(result);
      this.lawyer.firstName=result.firstName ;
      this.lawyer.familyName=result.familyName;
      this.lawyer.age=result.age;
      this.lawyer.adress=result.adress;
      this.lawyer.email=result.email;
      this.lawyer.speciality=result.speciality;
      this.lawyer.description=result.description;
      if(result.image === undefined){
        this.lawyer.image="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" ;
      }else{
        this.lawyer.image=result.image;
      }
    });
  }
  
  setImage(event: any){
    const fd=new FormData();
    const file =<File>event.target.files[0];
    fd.append("file",file,file.name);
    
    this.http.post("http://localhost:3000/auth-lawyer/picture/"+this.token,fd)
        .subscribe((result:any) => {
           this.lawyer.image=result.image;
        }) ;
  }

}
