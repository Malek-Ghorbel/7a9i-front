import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lawyer-cases',
  templateUrl: './lawyer-cases.component.html',
  styleUrls: ['./lawyer-cases.component.scss']
})
export class LawyerCasesComponent implements OnInit {

  btnencours= "btn btn-primary";
  btnterm="btn btn-outline-primary";
  etat="en cours";
  constructor() { }

  ngOnInit(): void {
  }

  onShowEncours(){
    this.etat="en cours";
    this.btnencours="btn btn-primary";
    this.btnterm ="btn btn-outline-primary"
  }

  onShowTermine(){
    this.etat="terminée";
    this.btnterm="btn btn-primary";
    this.btnencours ="btn btn-outline-primary"
  }

}
