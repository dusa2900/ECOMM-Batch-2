import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EcommService } from '../SERVICES/ecomm.service';
import { LoginAuthService } from '../SERVICES/login.auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private loginAuth:LoginAuthService, private router:Router){ }
  canActivate():boolean
  {
    if(this.loginAuth.isLoggedIn())
    {
      return true
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
