import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent implements OnInit {

  user = {
    name:"",
    FamilyName:"",
    age:"",
    city:"",
    email:"",
    password:"",
    confirmPassword:"",
    type:"string"
}

  cookieValue : any ;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  submitForm(user: any){
    this.http.post('http://localhost:3000/auth-client/signup' , user ,{withCredentials: true})
    .subscribe(result => {
      console.log(result) ; 
      console.log(this.cookieService.getAll()) ;
      
    }) ;
  }
}
