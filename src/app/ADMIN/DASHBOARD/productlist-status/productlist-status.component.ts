import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/SERVICES/admin.service';
// import { AdminService } from 'src/app/SERVICES/admin.service';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-productlist-status',
  templateUrl: './productlist-status.component.html',
  styleUrls: ['./productlist-status.component.scss']
})
export class ProductlistStatusComponent implements OnInit {
  p:number=1
  totalproducts: any;
  constructor(private admin:AdminService) { 

  
  }

  ngOnInit() {
    this.noOfProducts()
  }
noOfProducts() {

  this.admin.getProductList().subscribe(res=>
    {

      this.totalproducts=res
      console.log("products",res);


    
    }
            
    )
 }

}
