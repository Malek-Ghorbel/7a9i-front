import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent implements OnInit {


 
  public signupClientForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    FamilyName :new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required)
  })

  constructor(private signupService: SignupService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signupClientForm = this.formBuilder.group({
      name: ['', Validators.required],
      FamilyName: ['', Validators.required],
      age:['',[ Validators.required, Validators.min(18)]],
      city:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      confirmPassword: ['', Validators.required],
      type:["client"],
      image:[""],
  })
  }

  submitForm(signupClientForm: FormGroup){
    this.signupService.signupClient(signupClientForm.value)
    .subscribe(
      result => {
        console.log(result)
        localStorage.setItem("token",result.token);
        localStorage.setItem("type","client");
        this.router.navigate(['/'])
      },
      erreur => alert("Verifiez vos données")) ;
   }
  
}
