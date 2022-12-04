import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-home-remade',
  templateUrl: './home-remade.component.html',
  styleUrls: ['./home-remade.component.scss']
})
export class HomeRemadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
