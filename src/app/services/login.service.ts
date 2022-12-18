import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginLawyer(credentials: any) : Observable<any>{
    return this.http.post(environment.DOMAIN + '/auth-lawyer/signin' , credentials ,{withCredentials: true})
  }

  loginClient(credentials: any) : Observable<any>{
    return  this.http.post(environment.DOMAIN + '/auth-client/signin' , credentials ,{withCredentials: true})
  }
}
