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

  ngOnInit(): void {
    this.loadLawyers() ;
  }

  loadLawyers() {
    this.http.post("http://localhost:3000/auth-lawyer/lawyers", "")
      .subscribe((result) => {
        this.lawyers = result ;
    })
  }
}
