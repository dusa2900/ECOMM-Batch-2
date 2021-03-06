import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
//import { BehaviorSubject } from 'rxjs';

import { CartItem } from '../models/cart-item';
//import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

 // public apiUrl:string="http://localhost:3000/cartItems/"
 public cartItem:any=[];
 public productList=new BehaviorSubject<any>([]);

  constructor(private hc:HttpClient) { }
  setproduct(product:any){
    this.cartItem.push(...product);
    this.productList.next(product);
      }
  getProducts(){
    return this.productList.asObservable();
   }
  getCartItems(): Observable<any> {

       return this.hc.get<any>("http://localhost:3000/cartItems")
  }
   




addToCart(item:any):Observable<any>
{ this.cartItem.push(item);
  this.productList.next(this.cartItem);
 return this.hc.post("http://localhost:3000/cartItems",item);

}

removeCartItem(product:any): Observable<any>{
  console.log("remove",this.cartItem)
  this.cartItem.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.cartItem.splice(index,1);
   
    }
  })
  this.productList.next(this.cartItem);
  
  return this.hc.delete(`http://localhost:3000/cartItems/${product.id}`)
}

removeAllcart(): Observable<any>{
  this.cartItem=[]
  this.productList.next(this.cartItem);
  return this.hc.delete<any>("http://localhost:3000/cartItems");
}


///Return Order function////

// checkout payment Data
CheckOutData(item:any):Observable<any>
{
  return this.hc.post("http://localhost:3000/Orders",item);
}

Orders():Observable<any>
{
  return this.hc.get(" http://localhost:3000/Orders");
}

CancelOrder(item:any):Observable<any>
{
  //console.log("cancelorder",item);
  return this.hc.delete(`http://localhost:3000/Orders/${item.id}`);
}
// PostOrder(item:any):Observable<any>
// {
//   return this.hc.post("http://localhost:3000/History",item)
// }
// History():Observable<any>
// {
//   return this.hc.get("http://localhost:3000/History")
// }


}
