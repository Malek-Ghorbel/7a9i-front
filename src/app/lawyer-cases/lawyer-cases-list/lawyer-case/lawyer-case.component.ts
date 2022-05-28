import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../case.model';
import { ModifModalComponent } from './modif-modal/modif-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-lawyer-case',
  templateUrl: './lawyer-case.component.html',
  styleUrls: ['./lawyer-case.component.scss']
})
export class LawyerCaseComponent implements OnInit {

  modalRef: MdbModalRef<ModifModalComponent> | null = null;

  @Input() case!: Case ;
  public clientName!: string;


  constructor(private modalService: MdbModalService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalRef = this.modalService.open(ModifModalComponent, 
            {data: this.case});

    this.modalRef.onClose.subscribe((i: Case)=>{
      this.http.patch('http://localhost:3000/cases/'+i.id, i)
      .subscribe((result: any)=>{
        this.case = result;
      })
      //this.case.etat = i.etat;
      //this.case.description=i.description;
      //this.case.todos = todos;
    })
    
  }

}
