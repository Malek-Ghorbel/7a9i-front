
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup-lawyer',
  templateUrl: './signup-lawyer.component.html',
  styleUrls: ['./signup-lawyer.component.scss']
})
export class SignupLawyerComponent implements OnInit {

  public signupLawyerForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    FamilyName :new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    speciality : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required)
  })

  constructor(private signupService: SignupService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signupLawyerForm = this.formBuilder.group({
      name: ['',Validators.required],
      FamilyName: ['', Validators.required],
      age:['', [Validators.required, Validators.min(25)]],
      city:['', Validators.required],
      speciality:['', Validators.required],
      description:['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(9)]],
      confirmPassword: ['', Validators.required],
      type:["lawyer"],
      image:[""],
  }, );
  }

  submitForm(signupLawyerForm: FormGroup){
    this.signupService.signupLawyer(signupLawyerForm.value)
    .subscribe(
      result => {
        console.log(result);
        localStorage.setItem("token",result.token);
        localStorage.setItem("type","lawyer");
        this.router.navigate(['/'])
      },
      erreur => alert("Veridiez vos données")) ;
  }
  

}
