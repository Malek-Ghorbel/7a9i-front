import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    type:"client"
}
  cookieValue : any ;

  public signupClientForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    FamilyName :new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required)
  })

  constructor(private http: HttpClient, private cookieService: CookieService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupClientForm = this.formBuilder.group({
      name: ['', Validators.required],
      FamilyName: ['', Validators.required],
      age:['', Validators.required],
      city:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  })
  }

  submitForm(user: any){
    this.http.post('http://localhost:3000/auth-client/signup' , user ,{withCredentials: true})
    .subscribe(result => {
      console.log(result) ; 
      console.log(this.cookieService.getAll()) ;
    }) ;
   }
  
}


