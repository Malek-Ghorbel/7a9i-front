import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email : "" ,
    password : ""
  } ;

  cookieValue : any ;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  submitForm(user: any){
    this.http.post('http://localhost:3000/auth-client/signin' , user ,{withCredentials: true})
    .subscribe(result => {
      console.log(result) ; 
      console.log(this.cookieService.getAll()) ;
      
    }) ;

  /*submitFormClient(user: any){
    this.http.post('http://localhost:3000/auth-client/signin' , user ,{withCredentials: true})
    .subscribe(result => {
      console.log(result) ; 
      console.log(this.cookieService.getAll()) ;
      
    }) ;
  }

  submitFormLawyer(user: any){
    this.http.post('http://localhost:3000/auth-lawyer/signin' , user ,{withCredentials: true})
    .subscribe(result => {
      console.log(result) ; 
      console.log(this.cookieService.getAll()) ;
      
    }) ;
  }*/


}
