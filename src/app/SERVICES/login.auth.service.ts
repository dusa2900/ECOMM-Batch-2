import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }

  public setRoles(roles:any) {
    sessionStorage.setItem('roles', roles);
  }

  public getRoles() {
   return sessionStorage.getItem('roles');
   
  }
  public setUsername(username:any) {
    sessionStorage.setItem('username', username);
  }

  // public getUsername() {
  //  return  sessionStorage.getItem('username');
  // }
  public setCartLength(length:any) {
    sessionStorage.setItem('cartlength', length);
  }


  public getCartLength() {
    return sessionStorage.getItem('cartlength');
  }


  public setEmail(email:any) {
    sessionStorage.setItem('userEmail', email);
  }

  public getEmail() {
    return sessionStorage.getItem('userEmail');
  }

  public setToken(jwtToken: string) {
    sessionStorage.setItem('jwtToken', jwtToken);
  }

  public getToken() {
   return  sessionStorage.getItem('jwtToken');
  }

  public clear() {
    sessionStorage.clear();
  }

  public isLoggedIn() {
    
    return this.getEmail() && this.getRoles()  && this.getToken() 

  }

}
