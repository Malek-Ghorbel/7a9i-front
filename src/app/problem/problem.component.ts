import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) { }


  isAuth() : boolean {
    if (localStorage.getItem("token")) return true
    else return false ;
  }

  isAuthClient() : boolean {
    if (localStorage.getItem("token")) {
    if (localStorage.getItem("type") === "client") return true
      else return false ;
    }
    else return true ;
  }

  ngOnInit(): void {
    if(!this.isAuthClient()) {
      window.alert('you are a lwayer you need to be logged in as a client') ;
      this.router.navigate(['/'])
    }
    if(!this.isAuth()) {
      window.alert('you need to be loggzd in as a client') ;
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
