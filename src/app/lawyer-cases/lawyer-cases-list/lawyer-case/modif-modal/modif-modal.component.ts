import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Case } from 'src/app/lawyer-cases/case.model';

@Component({
  selector: 'app-modif-modal',
  templateUrl: './modif-modal.component.html',
  styleUrls: ['./modif-modal.component.scss']
})
export class ModifModalComponent implements OnInit {

  clientName!:string;
  name!:string;
  description!: string;
  etat!:string;
  todos!: string[];
  

  constructor(private modalService: MdbModalService,public modalRef: MdbModalRef<ModifModalComponent>) {}
 
  close(): void {
    //const closeMessage = 'Modal closed';
    const i = {name:this.name, 
      description: this.description, 
      clientName: this.clientName, 
      etat: this.etat, 
      todos:this.todos}
    this.modalRef.close(i);
  }
  ngOnInit(): void {
  }

}
