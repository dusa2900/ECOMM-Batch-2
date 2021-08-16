import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  public products : any = [];
  paymentHandler: any = null;
  cartitems: any[] = [];
  total: any;
  item:any;
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.invokeStripe();
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
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
      name: 'Technical Adda',
      description: '4 Products Added',
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
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  inc(item:any){
   if(item.quantity != 5){
     item.quantity += 1;
   }
   
  }
 
  dec(item:any){
    if(item.quantity != 1){
      item.quantity -= 1;
    }
  }
}

