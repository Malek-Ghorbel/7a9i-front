import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Case } from 'src/app/lawyer-cases/case.model';

@Component({
  selector: 'app-modif-modal',
  templateUrl: './modif-modal.component.html',
  styleUrls: ['./modif-modal.component.scss']
})
export class ModifModalComponent implements OnInit {


  clientName!: string;
  _id!: string;
  lawyerEmail!: string;
  clientEmail!: string;
  type!: string;
  description!: string;
  date!: Date;
  status!: string;
  todos!: string[];
  

  constructor(private http: HttpClient, private modalService: MdbModalService,public modalRef: MdbModalRef<ModifModalComponent>) {}
 
  close(): void {
    
    const i = 
    { 
      clientName: this.clientName, 
      _id: this._id,
      type:this.type, 
      description: this.description,
      status: this.status, 
      date: this.date,
      todos:this.todos
    }
    console.log(i);
    this.modalRef.close(i); 
  }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/auth-client/clientInfoByEmail/'+this.clientEmail)
    .subscribe((result: any) =>{
      this.clientName = result.name
    })
  }

}
