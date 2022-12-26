import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { RatingModalComponent } from 'src/app/rating-modal/rating-modal.component';
import { Client } from 'src/app/Model/client.model';
import { LoginService } from 'src/app/services/login.service';
import { LawyerCasesService } from 'src/app/services/lawyer-cases.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.scss']
})
export class ProfileClientComponent implements OnInit {

  constructor(private http: HttpClient, private modalService: MdbModalService, private loginService: LoginService, private lawyerCasesService: LawyerCasesService) { }

  token : string | null ="" ;
  
  client!: Client;
  
  progressCases:any;
  cases:any;
  completeCases: any = null ;
  
   ngOnInit(): void {
    this.getProfile();   
    
  }

   getProfile(){
    this.loginService.getClient()
    .subscribe(
      result => {
      this.client = result;
      this.displayCasesInProgress() ; 
      this.displayCasesComplete() ;
      this.token = localStorage.getItem("token");
    })
  }

  async setImage(event: any){
    const fd=new FormData();
    const file =<File>event.target.files[0];
    fd.append("file",file,file.name);
    
    this.http.post("http://localhost:3000/auth-client/picture/"+this.token,fd)
        .subscribe((result:any) => {
           this.client.image=result.image;
        }) ;
  }

  /*async loadClientCases() {
    
    this.http.get("http://localhost:3000/appointment/appointments/"+this.client.email)
      .subscribe((result) => {
        this.cases=result;
    })
  }*/

   
 displayCasesInProgress(){
  this.lawyerCasesService.loadCasesProgressClient(this.client.email)
    .subscribe((result) => {
    this.progressCases=result;
  })
  }

  async displayCasesComplete(){
    this.lawyerCasesService.loadCasesFinishClient(this.client.email)
      .subscribe((result) => {
        this.completeCases=result;
        if(this.completeCases.length != 0 ) {
           let notRatedCompleteCases : any[] = [];
           console.log("completeCases: " + JSON.stringify(this.completeCases));
           this.completeCases.map((completeCase:any) => {
          if(completeCase.isRated!=true){
            notRatedCompleteCases.push(completeCase);
          }
        });
        this.modalService.open(RatingModalComponent , {data : {cases : notRatedCompleteCases }});
        }  
      })
    }

  /*async getLawyerName(){
  this.http.get("http://localhost:3000/auth-lawyer/lawyerInfoByEmail/"+this.client.email)
  .subscribe((result) => {
  this.clientEmail=result;
  })
  }*/


}