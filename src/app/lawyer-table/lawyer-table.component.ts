import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lawyer-table',
  templateUrl: './lawyer-table.component.html',
  styleUrls: ['./lawyer-table.component.scss']
})
export class LawyerTableComponent implements OnInit {

  lawyers : any  ;

  constructor(private http: HttpClient) { }
  
  appointment={
    lawyerEmail:"",
    clientEmail:"",
    date:"",
    description:"",
    type:"",
    status:"demand"
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
    })
  }

  saveLawyer(lawyer:any){
    this.hasBooked=true;
   
   this.token =localStorage.getItem("token");
   this.http.get('http://localhost:3000/auth-client/clientInfo/'+this.token)
  .subscribe((result :any)  => {
    this.appointment.clientEmail=result.email;
    this.appointment.lawyerEmail=lawyer.email;
    this.appointment.type=localStorage.getItem('type')!;
    this.appointment.description=localStorage.getItem('description')!;
    console.log(this.appointment);
    this.http.post("http://localhost:3000/appointment/book/",this.appointment)
    .subscribe((result :any)  => {});
    alert("You have booked an appointment.Wait until you get accepted !");
  });
   
  }

  

  

}
