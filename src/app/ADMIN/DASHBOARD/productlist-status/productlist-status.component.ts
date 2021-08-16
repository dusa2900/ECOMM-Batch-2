import { Component, OnInit } from '@angular/core';
// import { AdminService } from 'src/app/SERVICES/admin.service';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-productlist-status',
  templateUrl: './productlist-status.component.html',
  styleUrls: ['./productlist-status.component.scss']
})
export class ProductlistStatusComponent implements OnInit {
  totalProductsmens: any;
  totalProductswomens:any
  totalProductskids:any
  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
    this.noOfProducts()
  }
noOfProducts() {
  this.ps.getProductList().subscribe(res=>
    {
      this.totalProductsmens =res.productstatus.menswear;
      this.totalProductswomens =res.productstatus.womenswear;
      this.totalProductskids =res.productstatus.kidswear;

      
    }
            
    )}

}
