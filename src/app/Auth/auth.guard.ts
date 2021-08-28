import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { EcommService } from '../SERVICES/ecomm.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private ecomm:EcommService, private router:Router){ }

  canActivate():boolean
  {
    
    if(this.ecomm.loggedIn())
    {
      return true
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
