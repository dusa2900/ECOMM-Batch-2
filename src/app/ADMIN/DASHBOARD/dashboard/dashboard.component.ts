import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/SERVICES/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  coupon: any;
  forgotpassword: any;
  products: any;
  orders: any;
  transactions: any;
  listusers: any;
  constructor(private admin: AdminService) { 

    this.admin.getcoupons().subscribe((res: any) => {
      this.coupon = res.length
      console.log("getcoupon", this.coupon)
    })


    this.admin.forgotpassword().subscribe((res: any) => {
      this.forgotpassword = res.length
      console.log("listusers", this.forgotpassword)
    })

    this.admin.getProductList().subscribe(res => { this.products = res.length })

    this.admin.getorders().subscribe((res: any) => {
      this.orders = res.length
      console.log("orders", this.orders)
    })

    this.admin.transactions().subscribe((res: any) => {
      this.transactions = res.length
      console.log("transactions", this.transactions)
    })


    this.admin.getlistusers().subscribe((res: any) => {
      this.listusers = res.length
      console.log("listusers", this.listusers)
    })

   }

  ngOnInit(): void {
  }

}
