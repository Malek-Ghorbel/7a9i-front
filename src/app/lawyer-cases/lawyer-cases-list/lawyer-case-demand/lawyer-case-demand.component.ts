import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../../Model/case.model';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { LawyerCasesService } from 'src/app/services/lawyer-cases.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-lawyer-case-demand',
  templateUrl: './lawyer-case-demand.component.html',
  styleUrls: ['./lawyer-case-demand.component.scss']
})
export class LawyerCaseDemandComponent implements OnInit {


  @Input() case!: Case ;
  
  //public clientName!: string;
  //public name!: string;
  @Input() isLawyer!: boolean;


  constructor( 
    private http: HttpClient, 
    private loginService: LoginService, 
    private lawyerCasesService: LawyerCasesService) { }

  ngOnInit(): void {
    if(this.isLawyer){
      this.loginService.getClientByEmail(this.case.clientEmail)
      .subscribe((result: any) =>{
      this.case.clientName= result.name;
    })
    }
    else{
      this.getLawyerName();
    }
    
  }
  
  rate(n : number) {
    this.lawyerCasesService.ratedAppointment(this.case._id) 
    .subscribe((result) => {console.log(result);})
    this.loginService.updateRatingLawyer(n, this.case.lawyerEmail) 
    .subscribe((result) => {console.log(result);})
  }

  
  caseAccepted(){
    this.case.status = 'en cours';
    this.lawyerCasesService.updateCase(this.case._id, this.case)
    .subscribe((result: any)=>{location.reload();})
  }

  caseDeleted(){
    this.lawyerCasesService.deleteCase(this.case._id)
    .subscribe((result: any)=>{location.reload();})
  }

  async getLawyerName(){
    this.loginService.getLawyerByEmail(this.case.lawyerEmail)
    .subscribe((result: any) => {
        this.case.clientName="Maitre "+ result.FamilyName+" "+ result.name  ;
      }
    )
  }
}
