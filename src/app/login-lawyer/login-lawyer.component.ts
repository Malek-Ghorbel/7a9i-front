import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-lawyer',
  templateUrl: './login-lawyer.component.html',
  styleUrls: ['./login-lawyer.component.scss']
})
export class LoginLawyerComponent implements OnInit {


  user = {
    email : "" ,
    password : ""
  } ;

  cookieValue : string ="";

  public loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private http: HttpClient, private cookieService: CookieService, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }


  submitForm(user: any){
    this.http.post('http://localhost:3000/auth-lawyer/signin' , user ,{withCredentials: true})
    .subscribe((result :any)  => {
      localStorage.setItem("token",result.token);
      localStorage.setItem("type","lawyer");
      this.router.navigate(['/'])
    }) ;
  }

}
