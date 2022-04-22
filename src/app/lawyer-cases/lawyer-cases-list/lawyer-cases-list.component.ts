import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../case.model';

@Component({
  selector: 'app-lawyer-cases-list',
  templateUrl: './lawyer-cases-list.component.html',
  styleUrls: ['./lawyer-cases-list.component.scss']
})
export class LawyerCasesListComponent implements OnInit {

  cases: Case[] = [
    new Case('Divorce', 'Detail sur l avancement de l affaire', 'MR xx', 'en cours'),
    new Case('Meurtre', 'Detail sur l avancement de l affaire', 'MR yy', 'en cours'),
    new Case('Cheque sans provision', 'Detail sur l avancement de l affaire', 'MR zz', 'en cours')
  ]

  @Input() etat!:string ;

  nbencours = this.cases.filter((i) => i.etat == "en cours").length;
  nbterm = this.cases.filter((i) => i.etat == "terminée").length;

  constructor() { }

  ngOnInit(): void {
  }

}
