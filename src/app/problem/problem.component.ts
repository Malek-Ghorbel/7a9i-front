import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  constructor(private router: Router) { }

  isAuth() : boolean {
    if (localStorage.getItem("token")) return true
    else return false ;
  }

  ngOnInit(): void {
    if(!this.isAuth()) {
      this.router.navigate(['/loginClient'])
    }
  }

}
