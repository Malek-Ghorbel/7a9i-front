import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
  }

  isAuth() : boolean {
    const token = this.cookieService.get('auth') ;
    if (token)
      return true ;
    else 
      return false ;
  }

  signout() : void {
    this.cookieService.deleteAll() ;
  }
 }
