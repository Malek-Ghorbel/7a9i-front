import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Case } from 'src/app/lawyer-cases/case.model';

@Component({
  selector: 'app-modif-modal',
  templateUrl: './modif-modal.component.html',
  styleUrls: ['./modif-modal.component.scss']
})
export class ModifModalComponent implements OnInit {

  case!: Case;
  constructor(public modalRef: MdbModalRef<ModifModalComponent>) {}
 
  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

  ngOnInit(): void {
  }

}
