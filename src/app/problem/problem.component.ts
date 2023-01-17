import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  
  problem = {
    type:"",
    description:""
  }
  
  public problemDescriptionForm = new FormGroup ({
    type: new FormControl(''),
    description :new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private loginService: LoginService ) { }


  ngOnInit(): void {
    if(!this.loginService.isAuthClient()) {
      this.toastr.error("vous etes un avocat, il faut etre un client");
      this.router.navigate(['/'])
    }
    if(!this.loginService.isAuth()) {
      this.toastr.error("vous devez etre connecter en tant que client");
      this.router.navigate(['/login'])
    }
    this.problemDescriptionForm = this.formBuilder.group({
      type: ['',  Validators.required],
      description: ['',  Validators.required],
    })
  }

  shouldShowLawyers = false ;

  loadLawyers() {
    this.shouldShowLawyers = true ;
  }

}
