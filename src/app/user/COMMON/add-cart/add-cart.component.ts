import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/SERVICES/cart.service';
import { LoginAuthService } from 'src/app/SERVICES/login.auth.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

 
  // public products : any = [];
  public grandTotal  = 0;


  public products:any;
  constructor(private cart:CartService,private login:LoginAuthService,private router: Router) { }

  
  ngOnInit() {

    this.loadCartItems()
    }
   

     

        loadCartItems() {

          this.cart.getCartItems().subscribe(  (res:any)=>{
            console.log("addcarttttt:",res);
             this.products = res;
            this.login.setCartLength(res.length);
             this.calcCartTotal();
             })
         
        
        }
      
        calcCartTotal() {
          this.grandTotal = 0
       
          this.products.forEach((item:any) => {
            
           
            this.grandTotal += Math.round(item.quantity *item.product.price )
          })
        }


//////increment & decrement function////////
        incQnt(value:any){
          console.log("quantity",value.instock);
          
          if(value.quantity != value.instock)
          {
            value.quantity +=1;
            this.calcCartTotal() ;
          
          }
        }
     
        decQnt(value:any){
       
          if(value.quantity != 1)
          {
            value.quantity -=1;
            this.calcCartTotal() 
           
          }
        }
/////removeitem Function////////
        removeItem(item:any){
          console.log("remove",item);
          this.cart.removeCartItem(item).subscribe(
            (res:any)=>{
          this.loadCartItems()
             
                console.log("deleteeeeee",res)
            }
          )
            }
        emptycart(){
              this.cart.removeAllcart().subscribe(
                (res:any)=>
                {
                  this.loadCartItems()
                  console.log("delete all",res);
                  // this.products={};
                }
              )
        }       

///payment//
checkout(products:any,grandTotal:any)
{
  // this.cart.CheckOutData(products).subscribe(res=>
  //   console.log(res)
  //   );


  sessionStorage.setItem("addproducts",JSON.stringify(products))
  sessionStorage.setItem("addgrandtotal",grandTotal)

  this.router.navigate(['/payment'])

    }


   

        }
        



