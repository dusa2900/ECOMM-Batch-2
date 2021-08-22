import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

//import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }
public apiUrl1:string="  http://localhost:4000/Order";
public apiUrl:string="  http://localhost:3000/products";

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //return order function//
  // getOrders():Observable<any>
  // {
  //   return this.http.get(this.apiUrl1);
  // }
////product Description function////
// getDescription(id:any):Observable<any>
// {
//   return this.http.get("http://localhost:3000/menswear/"+id)
// }
  

////product List function////
getCategoryList():Observable<any>
{
  return this.http.get<any>("http://localhost:3000/TotalProducts/")
}
  
////SecondNavbar List function////
getSecondNavbar():Observable<any>
{
  return this.http.get("http://localhost:3000/secondNavbar/")
}

///Appearels list function
  getAppearelssList():Observable<any>
  {
    return this.http.get("http://localhost:3000/products");
  }

}
