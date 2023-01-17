import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../../Model/case.model';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { ModifModalComponent } from '../lawyer-case-progress/modif-modal/modif-modal.component';
import { LoginService } from 'src/app/services/login.service';
import { LawyerCasesService } from 'src/app/services/lawyer-cases.service';

@Component({
  selector: 'app-lawyer-case',
  templateUrl: './lawyer-case.component.html',
  styleUrls: ['./lawyer-case.component.scss']
})
export class LawyerCaseComponent implements OnInit {

  modalRef: MdbModalRef<ModifModalComponent> | null = null;

  @Input() case!: Case ;
  
  //public clientName!: string;
  //public name!: string;
  @Input() isLawyer!: boolean;


  constructor(private modalService: MdbModalService, private http: HttpClient, private loginService: LoginService, private lawyerCasesService: LawyerCasesService) { }

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
    this.loginService.getLawyerByEmail(this.case.lawyerEmail)
    .subscribe((result:any) => {
      n=(n*100/5+Number(result.rating))/2;
      this.loginService.updateRatingLawyer(n, this.case.lawyerEmail) 
      .subscribe((result) => {console.log(result);})
    });
    
    
  }

  openModal() {
    this.modalRef = this.modalService.open(ModifModalComponent, 
      {data: this.case});
      this.modalRef.onClose.subscribe((i: Case)=>{
      console.log("i:" +i)
      this.lawyerCasesService.updateCase(i._id, i)
      .subscribe((result: any)=>{
        this.case = result;
        location.reload();
      })
      console.log("case: " + this.case)
    })
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
    })
  }
}
