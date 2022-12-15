import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Case } from '../lawyer-cases/case.model';


const CASE_DEMAND = "http://localhost:3000/appointment/demand/";
const CASE_PROGRESS = "http://localhost:3000/appointment/progress/";
const CASE_FINISH = "http://localhost:3000/appointment/complete/"

export type LawyerSubject = {
  event: "search" | "status";
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class LawyerCasesService {

  email: string = "";

  private selectSearchSubject = new Subject<LawyerSubject>();
  //selectSearchSubject$ = this.selectSearchSubject.asObservable()

  // private selectStatusSubject = new Subject<string>();
  // selectStatusSubject_ = this.selectSearchSubject.asObservable()
 
  constructor(private http: HttpClient, private router:Router) { 
    
  }

  verification(){
    if(!this.isAuthLawyer()) {
      window.alert('you are a client you need to be logged in as a lawyer') ;
      this.router.navigate(['/']) ;
    }
    if(!this.isAuth()) {
      window.alert('you need to be logged in as a lawyer') ;
      this.router.navigate(['/loginLawyer']) ;
    }
  }

  isAuth() : boolean {
    if (localStorage.getItem("token")) return true
    else return false ;
  }

  isAuthLawyer() : boolean {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("type") === "lawyer") return true
      else return false ;
    }
    else return true ;
  }

  getLawyerEmail() : Observable<Object> {
    const jwt=localStorage.getItem("token");
    return this.http.get('http://localhost:3000/auth-lawyer/lawyerInfo/'+ jwt)

    
  }

  loadCasesDemand(email: string) : Observable<Case[]> {
    return this.http.get<Case[]>(CASE_DEMAND + email)
    
    //console.log(this.casesDemand);
    
  }

  loadCasesProgress(email: string) : Observable<Case[]> {
    return this.http.get<Case[]>(CASE_PROGRESS + email)
      
    //console.log(this.casesProgress);
    
  }

  loadCasesFinish(email: string) : Observable<Case[]> {
    return this.http.get<Case[]>(CASE_FINISH + email)
    
    //console.log(this.casesFinish);
    
  }

  onSearchTextChanged(text: string){
    this.selectSearchSubject.next({
      event: "search",
      value: text
    });
  }

  subscribeTo(event: "search" | "status", cb: (data: LawyerSubject) => void){
    this.selectSearchSubject.subscribe(data => {
      if(data.event === event){
        cb(data);
      }
    })
  }

  StatusChanged(text: string){
    this.selectSearchSubject.next({
      event: "status",
      value: text
    })
    console.log("ss" + text)
  }
  
}
