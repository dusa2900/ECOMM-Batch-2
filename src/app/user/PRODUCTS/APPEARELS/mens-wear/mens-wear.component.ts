import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';
import { CartService } from 'src/app/SERVICES/cart.service';
@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.component.html',
  styleUrls: ['./mens-wear.component.css']
})
export class MensWearComponent implements OnInit {

  public productList : any ;
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit() {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
