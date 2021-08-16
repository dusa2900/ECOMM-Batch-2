import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart.service';
import { ProductsService } from 'src/app/SERVICES/products.service';
@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.component.html',
  styleUrls: ['./mens-wear.component.css']
})
export class MensWearComponent implements OnInit {

  public productList : any ;
  constructor(private ps : ProductsService, private cartService : CartService) { }

  ngOnInit() {
    this.ps.getProduct()
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
