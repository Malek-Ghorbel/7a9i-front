import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Lawyer } from '../Model/lawyer.model';
import { LawyerCasesService } from '../services/lawyer-cases.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-lawyer-table',
  templateUrl: './lawyer-table.component.html',
  styleUrls: ['./lawyer-table.component.scss']
})
export class LawyerTableComponent implements OnInit {

  lawyers : any;
  @Input() description: any ;
  @Input() problemType: any ;

  constructor(private http: HttpClient, private toastr: ToastrService, private loginService: LoginService, private lawyerCasesService: LawyerCasesService) { }
  
  appointment={
    lawyerEmail:"",
    clientEmail:"",
    date: null,
    description:"",
    type:"",
    status:"demande",
    isRated:false,
  }

  hasBooked=false;
 
  

  ngOnInit(): void {
    this.loadLawyers() ;
  }

  token : string | null ="" ;

  loadLawyers() {
    this.loginService.getLawyers()
      .subscribe((result) => {
        this.lawyers = result ;
        this.lawyers.map((lawyer: any) => console.log(lawyer.rating)) ;
        console.log(this.lawyers)
    })
    
  }

  saveLawyer(lawyer:any){
    this.hasBooked=true;
    //this.token =localStorage.getItem("token");
    this.loginService.getClient()
    .subscribe((result)  => {
    this.appointment.clientEmail=result.email;
    this.appointment.lawyerEmail=lawyer.email;
    this.appointment.type=this.problemType;
    this.appointment.description=this.description;
    this.appointment.isRated=false;
    console.log(this.appointment);
    this.lawyerCasesService.bookAppointment(this.appointment)
    .subscribe(
      result => {this.toastr.success("Votre demande a été envoyée. Attendez jusqu'à confirmation !");},
      erreur => {this.toastr.error("Un probleme est surbenu. Veillez essayer ulterieurement !");});
    
    });
    
  
   
  }

  

  

}
