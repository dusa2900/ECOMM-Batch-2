import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
login:string="Sign in";
cartCount:number=0;
public totalItem:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
