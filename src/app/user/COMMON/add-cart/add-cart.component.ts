import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

 
  // public products : any = [];
  public grandTotal  = 0;


  public products:any;
  constructor(private cart:CartService) { }

  
  ngOnInit() {
    this.invokeStripe();
    this.loadCartItems()
    }
   

     

        loadCartItems() {

          this.cart.getProducts().subscribe(  (res:any[])=>{
              // console.log("addcart:",res);
                this.products = res;
                this.calcCartTotal();
                })
          this.cart.getCartItems().subscribe(  (res:any)=>{
            //console.log("addcart:",res);
             this.products = res;
             this.calcCartTotal();
             })
         
        
        }
      
        calcCartTotal() {
          this.grandTotal = 0
       
          this.products.forEach((item:any) => {
            
           
            this.grandTotal += Math.round(item.qnt * item.price)
          })
        }


//////increment & decrement function////////
        incQnt(value:any){
          
          if(value.qnt != value.instock)
          {
            value.qnt +=1;
            this.calcCartTotal() ;
          
          }
        }
     
        decQnt(value:any){
       
          if(value.qnt != 1)
          {
            value.qnt -=1;
            this.calcCartTotal() 
           
          }
        }
/////removeitem Function////////
        removeItem(item:any){
          this.cart.removeCartItem(item).subscribe(
            (res:any)=>{
                //console.log(res)
               // this.loadCartItems();
            }
          )
            }
        emptycart(){
              this.cart.removeAllcart().subscribe(
                (res:any)=>
                {
                  console.log(res);
                  this.products={};
                }
              )
        }       

///
checkout(item:any)
{
  this.cart.CheckOutData(item).subscribe(res=>console.log(res));
}

////payment/////
        makePayment(amount: any) {
          const paymentHandler = (<any>window).StripeCheckout.configure({
            key:
              'pk_test_51HqKNkG7HcjhSjrfbDoLC6M1Ud7DFTpJkX9LKS98utMFAehGlVXa8qsEXYRV3mAKPKYwrJuZYemdpPYvxie3xPdg00TGxu9y0t',
      
            locale: 'auto',
            token: function (stripeToken: any) {
              console.log(stripeToken.card);
              alert('Stripe token generated!');
            },
          });
      
          paymentHandler.open({
            name: 'TechWave Batch-II',
           // description: '4 Products Added',
            amount: amount * 100,
          });
        }
        invokeStripe() {
          if (!window.document.getElementById('stripe-script')) {
            const script = window.document.createElement('script');
            script.id = 'stripe-script';
            script.type = 'text/javascript';
            script.src = 'https://checkout.stripe.com/checkout.js';
            window.document.body.appendChild(script);
          }
        }
        

}

