import { Component, OnInit, Output } from '@angular/core';
import { LawyerCasesService } from '../services/lawyer-cases.service';
import { Case } from './case.model';

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

  pd:number = 1;
  pc:number = 1;
  pt:number = 1;
  itemsPerPage: number = 5;
  totalItems : any;

  searchText: string = '';


  constructor(private lawyerCasesService: LawyerCasesService) { 
    
  }

  ngOnInit(): void {
    this.lawyerCasesService.verification();
    this.getLawyerEmail();
   
  }

  getLawyerEmail(){
    this.lawyerCasesService.getLawyer()
    .subscribe((result :any) => {
      this.email=result.email;
      console.log(this.email)
      this.onShowEncours();
    })
    
  }

  onShowEncours(){
    
    this.lawyerCasesService.StatusChanged("en cours");

    this.colorencours = "deep-orange";
    this.colorterm="white";
    this.colordemand = "white";
  }

  onShowDemand(){
    this.lawyerCasesService.StatusChanged("demande");
    this.colordemand = "deep-orange";
    this.colorterm="white";
    this.colorencours = "white";
  }

  onShowTermine(){
    this.lawyerCasesService.StatusChanged("terminée");
    this.colorencours = "white";
    this.colordemand = "white";
    this.colorterm="deep-orange";
  }

  sortDateCroiss(a:Case, b:Case): number{
    if(a.date < b.date){
      return -1;
    }
    if(a.date > b.date){
      return 1;
    }
    return 0;
  }

 
}
