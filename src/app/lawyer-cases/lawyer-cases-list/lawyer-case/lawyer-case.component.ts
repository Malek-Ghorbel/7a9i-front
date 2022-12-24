import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../case.model';
import { ModifModalComponent } from './modif-modal/modif-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lawyer-case',
  templateUrl: './lawyer-case.component.html',
  styleUrls: ['./lawyer-case.component.scss']
})
export class LawyerCaseComponent implements OnInit {

  modalRef: MdbModalRef<ModifModalComponent> | null = null;

  @Input() case!: Case ;
  //public clientName!: string;
  public name!: string;
  @Input() isLawyer!: boolean;


  constructor(private modalService: MdbModalService, private http: HttpClient) { }

  ngOnInit(): void {
    if(this.isLawyer){
      this.http.get('http://localhost:3000/auth-client/clientInfoByEmail/'+this.case.clientEmail)
    .subscribe((result: any) =>{
      this.name= result.name;
    })
    }
    else{
      this.getLawyerName();
    }
    
  }
  
  rate(n : number) {
    this.http.patch('http://localhost:3000/appointment/rated/'+ this.case._id ,"") 
    .subscribe((result) => {console.log(result);})
    this.http.get('http://localhost:3000/auth-lawyer/lawyerInfoByEmail/'+ this.case.lawyerEmail)
    .subscribe((result:any) => {
      n=(n*100/5+Number(result.rating))/2;
    this.http.post('http://localhost:3000/auth-lawyer/updateRating/'+ this.case.lawyerEmail + '/' + n ,"") 
    .subscribe((result) => {console.log(result);})
    });
    
    
  }

  openModal() {
    this.modalRef = this.modalService.open(ModifModalComponent, 
      {data: this.case});
      this.modalRef.onClose.subscribe((i: Case)=>{
      console.log("i:" +i)
      this.http.patch('http://localhost:3000/appointment/update/'+i._id, i)
      .subscribe((result: any)=>{
        this.case = result;
        location.reload();
      })
      console.log("case: " + this.case)
    })
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
    this.name="Maitre "+ result.FamilyName+" "+ result.name  ;
    })
  }
}
