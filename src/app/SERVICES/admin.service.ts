import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) { }
  
  getProductList():Observable<any>
  {
    return this.hc.get("http://localhost:4000/admin");
  }
  coupons(value:any):Observable<any>{
    return this.hc.post("http://localhost:4000/coupons",value)
  }
  getcoupons():Observable<any>{
    return this.hc.get("http://localhost:4000/coupons")
  }

  getlistusers():Observable<any>{
    return this.hc.get("http://localhost:4000/listusers")
  }

  forgotpassword():Observable<any>{
    return this.hc.get("http://localhost:4000/forgotpasswordusers")
  }
  transactions():Observable<any>{
    return this.hc.get("http://localhost:4000/transactions")
  }
  getorders():Observable<any>{
    return this.hc.get("http://localhost:4000/Return")
  }
}
