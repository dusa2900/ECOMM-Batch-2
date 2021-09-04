import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public products : any = [];
  paymentHandler: any = null;
  public grandTotal !: number;
amount:any
  constructor(private cs:CartService) { }

  ngOnInit(): void {

  this.amount = sessionStorage.getItem('addgrandtotal')

    this.invokeStripe();
    this.cs.getProducts()
    .subscribe(res=>{
      this.products = res;
      // this.grandTotal = this.cs.getTotalPrice();
    })
  }

  makePayment(item:any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:
        'pk_test_51HqKNkG7HcjhSjrfbDoLC6M1Ud7DFTpJkX9LKS98utMFAehGlVXa8qsEXYRV3mAKPKYwrJuZYemdpPYvxie3xPdg00TGxu9y0t',

      locale: 'auto',
      token: function (stripeToken: any) {
        const picked = (({ name,object,last4,price,brand,id,funding,products }) => ({ name,object,last4,price,brand,id,funding,products }))(stripeToken.card);
        picked.price = this.amount;
        picked.products=JSON.parse(sessionStorage.getItem('addproducts'));
        console.log("totalprod",picked);
        
        alert('Stripe token generated!');
      },
    });

    paymentHandler.open({
      name: 'Techwave',
      description: 'BATCH-2',
      amount: item * 100,
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
  emptycart(){
    // this.cs.removeAllCart();
  }

}
