import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lawyer-table',
  templateUrl: './lawyer-table.component.html',
  styleUrls: ['./lawyer-table.component.scss']
})
export class LawyerTableComponent implements OnInit {

  lawyers : any  ;
  @Input() description: any ;
  @Input() problemType: any ;

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  
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
    this.http.post("http://localhost:3000/auth-lawyer/lawyers", "")
      .subscribe((result) => {
        this.lawyers = result ;
        this.lawyers.map((lawyer: any) => console.log(lawyer.rating)) ;
        console.log(this.lawyers)
    })
    
  }

  saveLawyer(lawyer:any){
    this.hasBooked=true;
    this.token =localStorage.getItem("token");
    this.http.get('http://localhost:3000/auth-client/clientInfo/'+this.token)
  .subscribe((result :any)  => {
    
    this.appointment.clientEmail=result.email;
    this.appointment.lawyerEmail=lawyer.email;
    this.appointment.type=this.problemType;
    this.appointment.description=this.description;
    this.appointment.isRated=false;
    console.log(this.appointment);
    this.http.post("http://localhost:3000/appointment/book/",this.appointment)
    .subscribe((result :any)  => {});
    this.toastr.success("You have booked an appointment.Wait until you get accepted !");
    });
    
  
   
  }

  

  

}
