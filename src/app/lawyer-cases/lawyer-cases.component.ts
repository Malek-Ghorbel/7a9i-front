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
  constructor() { }

  ngOnInit(): void {
  }

  onShowEncours(){
    this.etat="en cours";
    //this.btnencours="btn btn-warning";
    //this.btnterm ="btn btn-outline-warning"
    this.colorencours = "deep-orange";
    this.colorterm="white";
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
    this.colorterm="deep-orange";
  }

}
