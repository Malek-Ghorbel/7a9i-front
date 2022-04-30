import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../case.model';
import { ModifModalComponent } from './modif-modal/modif-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-lawyer-case',
  templateUrl: './lawyer-case.component.html',
  styleUrls: ['./lawyer-case.component.scss']
})
export class LawyerCaseComponent implements OnInit {

  modalRef: MdbModalRef<ModifModalComponent> | null = null;

  @Input() case!: Case ;

  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalRef = this.modalService.open(ModifModalComponent, 
            {data: this.case});

    this.modalRef.onClose.subscribe((i: Case)=>{
      this.case.etat = i.etat;
      this.case.description=i.description;
      //this.case.todos = todos;
    })
    
  }

}
