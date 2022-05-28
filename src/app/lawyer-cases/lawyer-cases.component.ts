import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lawyer-cases',
  templateUrl: './lawyer-cases.component.html',
  styleUrls: ['./lawyer-cases.component.scss']
})
export class LawyerCasesComponent implements OnInit {

 // btnencours= "btn btn-warning";
  //btnterm="btn btn-outline-warning";
  colorencours = "deep-orange";
  colordemand="white"
  colorterm="white";
  etat="en cours";
  email="";

  case = {
    name:"",
    
  }


  casesDemand:any;
  casesProgree:any;
  cansesFinish:any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLawyerEmail();
  }

  onShowEncours(){
    this.etat="en cours";
    //this.btnencours="btn btn-warning";
    //this.btnterm ="btn btn-outline-warning"
    this.colorencours = "deep-orange";
    this.colorterm="white";
    this.colordemand = "white";
  }

  onShowDemand(){
    this.etat="demande";
    //this.btnencours="btn btn-warning";
    //this.btnterm ="btn btn-outline-warning"
    this.colordemand = "deep-orange";
    this.colorterm="white";
    this.colorencours = "white";
  }

  onShowTermine(){
    this.etat="terminée";
    //this.btnterm="btn btn-warning";
    //this.btnencours ="btn btn-outline-warning"
    this.colorencours = "white";
    this.colordemand = "white";
    this.colorterm="deep-orange";
  }

  getLawyerEmail(){
    const jwt=localStorage.getItem("jwt");
    this.http.get('http://localhost:3000/auth-lawyer/lawyerInfo/'+jwt)
    .subscribe((result :any)  => {
      this.email=result.email;
    })
  }


  loadCasesDemand() {
    this.onShowDemand()
    
    this.http.post("http://localhost:3000/appointment/demand",this.email)
      .subscribe((result) => {
        this.casesDemand = result ;
    })
  }


  loadCasesProgress() {
    this.onShowEncours();
    this.http.post("http://localhost:3000/appointment/progress",this.email)
      .subscribe((result) => {
        this.casesProgree = result ;
    })
  }


  loadCasesFinish(){
    this.onShowTermine();
    this.http.post("http://localhost:3000/appointment/complete",this.email)
      .subscribe((result) => {
        this.cansesFinish = result ;
    })
  }

}
