import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/////main-service//////
export class EcommService {

  constructor(private hc:HttpClient) { }
//forgotpassword//
  forgotpassword(value:any):Observable<any>{
    console.log("forgotpassword service",value);
    
    return this.hc.get('h')
  }
//register//
register(value:any):Observable<any>{
  console.log("register service",value);
  return this.hc.post('http',value)
  
}

}
