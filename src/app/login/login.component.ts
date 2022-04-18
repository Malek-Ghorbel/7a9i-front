import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  cookieValue : string ="";

  public loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private http: HttpClient, private cookieService: CookieService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  getCookie(name : string) : any{
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
  }

  submitForm(user: any){
    this.http.post('http://localhost:3000/auth-client/signin' , user ,{withCredentials: true})
    .subscribe((result :any)  => {
      this.cookieService.set('auth' , result.jwt) ;
      console.log(this.cookieService.get('auth')) ;
    }) ;
  }

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
