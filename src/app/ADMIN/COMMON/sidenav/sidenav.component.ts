import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from 'src/app/SERVICES/login.auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public loginauth:LoginAuthService , private route:Router) { }

  ngOnInit(): void {
  }
  logout()
  {

    this.loginauth.clear();
    this.route.navigate(['/login']);
    
  }

  public isLoggedIn() {

    return this.loginauth.isLoggedIn();
  }
}
