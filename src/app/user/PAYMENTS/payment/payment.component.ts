import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart.service';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { ProductsService } from 'src/app/SERVICES/products.service';

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
radioItems: Array<any>;
model   = {value: ''};


paydata:any=JSON.parse(sessionStorage.getItem('payment'));



// totalData:any = (({ street,state,zipcode}) => ({ street,state,zipcode}))(this.profile);
  address: any;

  constructor(private cs:CartService,private ecomm:EcommService) {

    this.paydata.price=sessionStorage.getItem('addgrandtotal')
this.paydata.paycartS=JSON.parse(sessionStorage.getItem('addproducts'));

  //  this. totalData.price=sessionStorage.getItem('addgrandtotal')
    // this.totalData.products=JSON.parse(sessionStorage.getItem('addproducts'));
    // console.log("totalData",this.totalData)

    this.radioItems = [{"coupon":"TECH0005","value":5},{"coupon":"TECH0025","value":25},{"coupon":"TECH0030","value":30} ];
   }

  ngOnInit(): void {

 //get-address//
this.ecomm.getprofile().subscribe((res:any) => {​​​​​​
  console.log("getprofile",res);
  
   
  res.map((add:any) =>{​​​​​​


this.paydata.userShipping=add

console.log("paydayaaaaa",this.paydata);

  // this.address=add
  
  // this.address.price=sessionStorage.getItem('addgrandtotal')
  // this.address.paycartS=JSON.parse(sessionStorage.getItem('addproducts'));
  // this.address=JSON.parse(sessionStorage.getItem('payment'));


   
          }​​​​​​)
          }​​​​​​)

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

        sessionStorage.setItem('payment', JSON.stringify(picked));
        //console.log("totalprod",picked);
        
        alert('Stripe token generated!');
      },
    });

    paymentHandler.open({
      name: 'Techwave',
      description: 'BATCH-2',
      amount: item.price * 100,
    });
    {/* item=JSON.parse(sessionStorage.getItem('payment')); */}
    //console.log("makpayment",item)
    this.cs.payment(item).subscribe((res:any)=>console.log(res));
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


  discount(x:any)
  {
    this.paydata.price =  this.paydata.price - ((this.paydata.price * x) / 100);
  }
}
