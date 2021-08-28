import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
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
  return this.hc.get("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/produtslist/display")
}


////get-products////
  getProductsList():Observable<any>
  {

    return this.hc.get("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/lists/productlistcategoryt");
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
//addd-to-cart///
    addcart(data:any):Observable<any>{
      console.log("add service",data);
      
      return this.hc.post("http://localhost:4000/Addtocart",data)
    }
  
      
    ////SecondNavbar List function////
    getSecondNavbar():Observable<any>
    {
      return this.hc.get("http://localhost:4000/secondNavbar/")
    }
    
 
}
