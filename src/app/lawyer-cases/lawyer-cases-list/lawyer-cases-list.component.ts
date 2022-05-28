import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../case.model';

@Component({
  selector: 'app-lawyer-cases-list',
  templateUrl: './lawyer-cases-list.component.html',
  styleUrls: ['./lawyer-cases-list.component.scss']
})
export class LawyerCasesListComponent implements OnInit {

  public cases: Case[] = []
  public nbencours =0;
  public nbterm = 0;

  @Input() etat!:string ;

  getcases(){
    this.http.get('http://localhost:3000/cases/lawyerCases/456')
    .subscribe((result: any)=>{
      console.log(result)
      for(var i = 0; i < result.length; i++){
        //const obj = JSON.parse(result[i]);
        this.cases.push(result[i]);
        if (result[i].etat == "en cours"){
          this.nbencours ++;
        }
        else {this.nbterm ++ }
      }
      //this.nbencours = this.cases.filter((i) => i.etat == "en cours").length;
      //this.nbterm = this.cases.filter((i) => i.etat == "terminée").length;

      
    })
  }

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getcases();
    
  }

}
