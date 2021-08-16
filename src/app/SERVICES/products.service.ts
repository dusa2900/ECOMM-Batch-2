import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private hc:HttpClient) { }
  

  getProductList():Observable<any>
  {
    return this.hc.get("http://localhost:4000/admin");
  }


////product List function////
getCategoryList():Observable<any>
{
  return this.hc.get("http://localhost:4000/TotalProducts")
}


////get-products////
  getAppearelssList():Observable<any>
  {
    return this.hc.get("http://localhost:4000/products");
  }


///////Dummy-Api-getproducts/////
  getProduct(){
    return this.hc.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
/////get -return-order////
   getOrder():Observable<any>{ 
    return this.hc.get("http://localhost:4000/Order");  
  
      } 
  
////get-orders///

getOrders():Observable<any>{ 
  return this.hc.get("http://localhost:4000/Orders")
}

//return-order////////////////////////////////
postreturnorder(value:any):Observable<any>{
  console.log("post service",value);
  
  return this.hc.post<any>("http://localhost:4000/postreturnorder",value)
  
}
}
