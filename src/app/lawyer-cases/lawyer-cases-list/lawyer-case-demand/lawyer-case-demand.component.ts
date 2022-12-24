import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../../Model/case.model';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { LawyerCasesService } from 'src/app/services/lawyer-cases.service';

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


  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    if(this.isLawyer){
      this.http.get('http://localhost:3000/auth-client/clientInfoByEmail/'+this.case.clientEmail)
    .subscribe((result: any) =>{
      this.case.clientName= result.name;
    })
    }
    else{
      this.getLawyerName();
    }
    
  }
  
  rate(n : number) {
    this.http.patch('http://localhost:3000/appointment/rated/'+ this.case._id ,"") 
    .subscribe((result) => {console.log(result);})
    this.http.post('http://localhost:3000/auth-lawyer/updateRating/'+ this.case.lawyerEmail + '/' + n ,"") 
    .subscribe((result) => {console.log(result);})
  }

  
  caseAccepted(){
    this.case.status = 'en cours';
    this.http.patch('http://localhost:3000/appointment/update/'+this.case._id, this.case)
    .subscribe((result: any)=>{location.reload();})
  }

  caseDeleted(){
    this.http.delete('http://localhost:3000/appointment/delete/'+this.case._id)
    .subscribe((result: any)=>{location.reload();})
  }

  async getLawyerName(){
    this.http.get("http://localhost:3000/auth-lawyer/lawyerInfoByEmail/"+this.case.lawyerEmail)
    .subscribe((result: any) => {
    this.case.clientName="Maitre "+ result.FamilyName+" "+ result.name  ;
    })
  }
}
