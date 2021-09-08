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
    return this.hc.get<any>("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/inventory/getAllData");
  }
  postcoupons(value:any):Observable<any>{
    console.log("postservice",value);
    
    return this.hc.post<any>("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/coupon/saveCouponData",value)
  }
  getcoupons():Observable<any>{
    return this.hc.get("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/coupon/sendCouponDetailsForadmin")
  }

  getlistusers():Observable<any>{
    return this.hc.get("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/userData/getallUserDetails")
  }

  forgotpassword():Observable<any>{
    return this.hc.get("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/userData/userRestPwdDetails")
  }
  transactions():Observable<any>{
    return this.hc.get("http://localhost:4000/transactions")
  }
  getorders():Observable<any>{
    return this.hc.get("http://localhost:4000/Return")
  }
}
