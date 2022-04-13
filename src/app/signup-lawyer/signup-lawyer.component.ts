import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup-lawyer',
  templateUrl: './signup-lawyer.component.html',
  styleUrls: ['./signup-lawyer.component.scss']
})
export class SignupLawyerComponent implements OnInit {

  lawyer = {
    name:"",
    FamilyName:"",
    age:"",
    city:"",
    speciality:"",
    description:"",
    email:"",
    password:"",
    confirmPassword:"",
    type:"lawyer"
}

  cookieValue : any ;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  submitForm(lawyer: any){
    this.http.post('http://localhost:3000/auth-lawyer/signup' , lawyer ,{withCredentials: true})
    .subscribe(result => {
      console.log(result) ; 
      console.log(this.cookieService.getAll()) ;
      
    }) ;
  }
  

}
