import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  isAuth() : boolean {
    if (localStorage.getItem("token")) return true
    else return false ;
  }
  
  
  getProfile(){
    const token =localStorage.getItem("token");
    this.http.get('http://localhost:3000/auth-client/info/'+token)
    .subscribe((result :any)  => {
      console.log(result);
    }) ;
  }



  signout() : void {
    localStorage.removeItem("token");
  }
 
}
