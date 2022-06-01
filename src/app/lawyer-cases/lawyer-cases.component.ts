import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lawyer-cases',
  templateUrl: './lawyer-cases.component.html',
  styleUrls: ['./lawyer-cases.component.scss']
})
export class LawyerCasesComponent implements OnInit {

  colorencours = "deep-orange";
  colordemand="white"
  colorterm="white";
  etat="en cours";
  email="";

  casesDemand:any;
  casesProgress:any;
  cansesFinish:any;

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    if(!this.isAuthLawyer()) {
      window.alert('you are a client you need to be logged in as a lawyer') ;
      this.router.navigate(['/']) ;
    }
    if(!this.isAuth()) {
      window.alert('you need to be logged in as a lawyer') ;
      this.router.navigate(['/loginLawyer']) ;
    }
    this.getLawyerEmail();
  }

  isAuth() : boolean {
    if (localStorage.getItem("token")) return true
    else return false ;
  }

  isAuthLawyer() : boolean {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("type") === "lawyer") return true
      else return false ;
    }
    else return true ;
  }

  getLawyerEmail(){
    const jwt=localStorage.getItem("token");
    this.http.get('http://localhost:3000/auth-lawyer/lawyerInfo/'+jwt)
    .subscribe((result :any)  => {
      this.email=result.email;
      this.loadCasesProgress();
    })
  }
  onShowEncours(){
    this.etat="en cours";
    this.colorencours = "deep-orange";
    this.colorterm="white";
    this.colordemand = "white";
  }

  onShowDemand(){
    this.etat="demande";
    this.colordemand = "deep-orange";
    this.colorterm="white";
    this.colorencours = "white";
  }

  onShowTermine(){
    this.etat="terminée";
    this.colorencours = "white";
    this.colordemand = "white";
    this.colorterm="deep-orange";
  }

  loadCasesDemand() {
    this.onShowDemand()
    console.log(this.email);
    this.http.get("http://localhost:3000/appointment/demand/"+this.email)
      .subscribe((result) => {
        console.log(result)
        this.casesDemand = result ;
    })
  }

  loadCasesProgress() {
    this.onShowEncours();
    this.http.get("http://localhost:3000/appointment/progress/"+this.email)
      .subscribe((result) => {
        this.casesProgress = result ;
    })
  }

  loadCasesFinish(){
    this.onShowTermine();
    this.http.get("http://localhost:3000/appointment/complete/"+this.email)
      .subscribe((result) => {
        this.cansesFinish = result ;
    })
  }

}
