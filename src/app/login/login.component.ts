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


  submitForm(user: any){
    this.http.post('http://localhost:3000/auth-client/signin' , user ,{withCredentials: true})
    .subscribe((result :any)  => {
      console.log(result);
      localStorage.setItem("token",result.token)
    }) ;
  }

 


}
