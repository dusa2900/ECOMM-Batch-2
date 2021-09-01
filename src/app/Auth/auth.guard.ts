import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { EcommService } from '../SERVICES/ecomm.service';
import { LoginAuthService } from '../SERVICES/login.auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginauth: LoginAuthService,
    private router: Router,
    private ecomm: EcommService,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginauth.getToken() !== null) {
      const role = route.data['roles'] as Array<string>;

      if (role) {
        const match = this.ecomm.roleMatch(role);

        if (match) {
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
    }

    this.router.navigate(['/login']);
    return false;
  }

}
