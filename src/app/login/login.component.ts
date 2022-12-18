import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private loginService : LoginService, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }


  submitForm(loginForm: FormGroup){
    this.loginService.loginClient(loginForm.value)
    .subscribe(
      (result :any)  => {
        localStorage.setItem("token",result.token);
        localStorage.setItem("type","client");
        this.router.navigate(['/'])
      },
      error => alert("Verifiez vos données")) ;
  }

 


}
