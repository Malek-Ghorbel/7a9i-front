import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  public signupLawyerForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    FamilyName :new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    speciality : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required)
  })

  constructor(private http: HttpClient, private cookieService: CookieService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signupLawyerForm = this.formBuilder.group({
      name: ['',Validators.required],
      FamilyName: ['', Validators.required],
      age:['', [Validators.required, Validators.min(25)]],
      city:['', Validators.required],
      speciality:['', Validators.required],
      description:['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      confirmPassword: ['', Validators.required],
      type:["lawyer"],
      image:[""],
  }, );
  }

  submitForm(lawyer: any){
    this.http.post('http://localhost:3000/auth-lawyer/signup' , lawyer ,{withCredentials: true})
    .subscribe((result :any)  => {
      localStorage.setItem("token",result.token);
      this.router.navigate(['/'])
    }) ;
  }
  

}
