import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CartService } from 'src/app/SERVICES/cart.service';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { UserprofileComponent } from '../../COMMON/userprofile/userprofile.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public products: any = [];
  paymentHandler: any = null;
  public grandTotal !: number;
  amount: any
  radioItems: any[] = [];
  // model   = {value: ''};
  model: any;
  dataitem: any
  paydata: any = {};
  profile: any;
  address: any = [];
  changeColor:any=[];
  deliver : any={};



  payInfo = (({ price, paycartS, userShipping }) => ({ price, paycartS, userShipping }))(this.paydata);


  constructor(private cs: CartService, private ecomm: EcommService, public dialog: MatDialog) {

    this.payInfo.price = sessionStorage.getItem('addgrandtotal')
    this.payInfo.paycartS = JSON.parse(sessionStorage.getItem('addproducts'));


    this.address = [{ "street": "kothapallyy", "zip": "404899843" }, { "street": "karimnagar", "zip": "404899843" }, { "street": "hyd", "zip": "404899843" }]


  }

  ngOnInit(): void {
    this.cs.getCoupons().subscribe((res: any) => {
      this.radioItems = res;
      console.log("getcoupons", this.radioItems);

    })
    //get-address//
    this.ecomm.getprofile().subscribe((res: any) => {
      console.log("getprofile", res);
      this.profile = res;

      res.map((add: any) => {


        // this.payInfo.userShipping=add

        console.log("paydayaaaaa", this.payInfo);
      })
    })

    this.invokeStripe();
    this.cs.getProducts()
      .subscribe(res => {
        this.products = res;
      })
  }

  makePayment(item: any) {

    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:
        'pk_test_51HqKNkG7HcjhSjrfbDoLC6M1Ud7DFTpJkX9LKS98utMFAehGlVXa8qsEXYRV3mAKPKYwrJuZYemdpPYvxie3xPdg00TGxu9y0t',
      locale: 'auto',
      token: (stripeToken: any) => {
        const picked = (({ name, object, last4, price, brand, id, funding, products }) => ({ name, object, last4, price, brand, id, funding, products }))(stripeToken.card);
        sessionStorage.setItem('payment', JSON.stringify(picked));
        this.dataitem = JSON.parse(sessionStorage.getItem('payment'));
        console.log("dataitemm111111", this.dataitem);
        item.name = this.dataitem.name
        item.brand = this.dataitem.brand
        item.object = this.dataitem.object
        item.last4 = this.dataitem.last4
        item.id = this.dataitem.id
        item.funding = this.dataitem.funding
        console.log("item", item);
        this.cs.payment(item).subscribe((res: any) => console.log(res));
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Techwave',
      description: 'BATCH-2',
      amount: item.price * 100,
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
  emptycart() {
    // this.cs.removeAllCart();
  }


  discount(x: any) {
    this.payInfo.price = this.payInfo.price - ((this.payInfo.price * x) / 100);
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserprofileComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}​​​`);
    });
  }


  changeaddess(item: any) {
    this.payInfo.userShipping = item
    console.log("addressssss", this.payInfo)
  }

}
