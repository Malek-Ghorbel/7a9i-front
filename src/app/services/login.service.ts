import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../Model/client.model';
import { Lawyer } from '../Model/lawyer.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router:Router) { }

  loginLawyer(credentials: any) : Observable<any>{
    return this.http.post(environment.DOMAIN + '/auth-lawyer/signin' , credentials ,{withCredentials: true})
  }

  loginClient(credentials: any) : Observable<any>{
    return  this.http.post(environment.DOMAIN + '/auth-client/signin' , credentials ,{withCredentials: true})
  }

  verification(){
    
    if(!this.isAuth()) {
      this.toastr.error('you need to be logged in as a lawyer');
      this.router.navigate(['/loginLawyer']) ;
    }
    else if(!this.isAuthLawyer()) {
      this.toastr.error('you are a client you need to be logged in as a lawyer');
      this.router.navigate(['/']) ;
    }
  }

  isAuth() : boolean {
    const token = localStorage.getItem("token")
    return !!token ;
  }

  isAuthLawyer() : boolean {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("type") === "lawyer") return true
      else return false ;
    }
    else return false ;
  }

  isAuthClient() : boolean {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("type") === "client") return true
        else return false ;
      }
      else return false ;
  }

  getLawyer() : Observable<Lawyer> {
    const jwt=localStorage.getItem("token");
    return this.http.get<Lawyer>(environment.DOMAIN + '/auth-lawyer/lawyerInfo/'+ jwt)
  }

  getClient() : Observable<Client> {
    const jwt=localStorage.getItem("token");
    return this.http.get<Client>(environment.DOMAIN + '/auth-client/clientInfo/'+ jwt)
  }


}
