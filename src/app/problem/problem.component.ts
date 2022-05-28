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

  ngOnInit(): void {
    if(!this.isAuth()) {
      this.router.navigate(['/login'])
    }
    this.problemDescriptionForm = this.formBuilder.group({
      type: [''],
      description: [''],
    })
  }

  shouldShowLawyers = false ;

  loadLawyers() {
    this.shouldShowLawyers = true ;
    localStorage.setItem('type', this.problem.type);
    localStorage.setItem('description',this.problem.description);
  }

}
