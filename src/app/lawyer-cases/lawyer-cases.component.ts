import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLawyerEmail();
  }

  getLawyerEmail(){
    const jwt=localStorage.getItem("token");
    this.http.get('http://localhost:3000/auth-lawyer/lawyerInfo/'+jwt)
    .subscribe((result :any)  => {
      this.email=result.email;
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
