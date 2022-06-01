import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private cookieService: CookieService, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }


  submitForm(user: any){
    this.http.post('http://localhost:3000/auth-client/signin' , user ,{withCredentials: true})
    .subscribe((result :any)  => {
      localStorage.setItem("token",result.token);
      localStorage.setItem("type","client");
      this.router.navigate(['/'])
    }) ;
  }

 


}
