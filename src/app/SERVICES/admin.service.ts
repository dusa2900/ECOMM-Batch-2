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
}
