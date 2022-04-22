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
    parcours:"",
    description:""
  }
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProfile();
  }
  getProfile(){
    const token =localStorage.getItem("token");
    this.http.get('http://localhost:3000/auth-lawyer/lawyerInfo/'+token)
    .subscribe((result :any)  => {
      console.log(result);
      this.lawyer.firstName=result.firstName ;
      this.lawyer.familyName=result.familyName;
      this.lawyer.age=result.age;
      this.lawyer.adress=result.adress;
      this.lawyer.email=result.email;
      this.lawyer.speciality=result.speciality;
      this.lawyer.description=result.description
    });
  }
  

}
