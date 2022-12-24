
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-lawyer',
  templateUrl: './login-lawyer.component.html',
  styleUrls: ['./login-lawyer.component.scss']
})
export class LoginLawyerComponent implements OnInit {


  public loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private loginService :LoginService, private formBuilder: FormBuilder, private router: Router , private toastr : ToastrService ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
    
  }


  submitForm(loginForm: FormGroup){
    this.loginService.loginLawyer(loginForm.value)
    .subscribe(
      result  => {
        localStorage.setItem("token",result.token);
        localStorage.setItem("type","lawyer");
        this.router.navigate(['/'])
      },
      error => this.toastr.error("Verifiez vos données")
      ) ;
    console.log(this.loginForm.value)
  }

}
