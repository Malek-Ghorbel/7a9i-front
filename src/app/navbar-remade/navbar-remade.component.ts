import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-remade',
  templateUrl: './navbar-remade.component.html',
  styleUrls: ['./navbar-remade.component.scss']
})
export class NavbarRemadeComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  collapsed = true; 
  
  isAuth() : boolean {
    if (localStorage.getItem("token")) return true
    else return false ;
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

  getProfile(){
    const token =localStorage.getItem("token");
    const type = localStorage.getItem("type");
    if(type === "client")
      this.router.navigate(["/profileClient"]) ;
    else 
      this.router.navigate(["/profileLawyer"]) ;
  }



  signout() : void {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
  }

}
