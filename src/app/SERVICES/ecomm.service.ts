import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/////main-service//////
export class EcommService {

  constructor(private hc:HttpClient) { }

  //login
login(value:any):Observable<any>{
console.log("login service",value);
return this.hc.post('',value)

}
//forgotpassword//
  forgotpassword(value:any):Observable<any>{
    console.log("forgotpassword service",value);
    
    return this.hc.post('h',value)
  }
//register//
register(value:any):Observable<any>{
  console.log("register service",value);
  return this.hc.post('http',value)
  
}
public apiUrl:string="http://localhost:4000/profile";

public getprofile():Observable<any>{   
  console.log(" get profile service"); 
  return this.hc.get(this.apiUrl);   

   

    } 


    updateprofile(res:any):Observable<any>{
      console.log("update profile service",res);
    
      return this.hc.put(this.apiUrl,res);
    
    }
}
