import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signupClient(credentials: any): Observable<any>{
    return this.http.post(environment.DOMAIN + '/auth-client/signup' , credentials ,{withCredentials: true})
  }

  signupLawyer(credentials: any): Observable<any>{
    return this.http.post(environment.DOMAIN + '/auth-lawyer/signup' , credentials ,{withCredentials: true})
  }

}
