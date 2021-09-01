import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { NgxImgZoomService } from "ngx-img-zoom";
import { CartService } from 'src/app/SERVICES/cart.service';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  productid:any;
  overview:any;
  // data={products:null};


    constructor(private route:ActivatedRoute, private _route:Router,private ps:ProductsService,private cart:CartService) {

      this.route.params.subscribe(
        params=>this.productid=params['productid']);
  console.log("id",this.productid);
  
        this.ps.getCategoryList().subscribe(
          res=>
         {
           res.forEach( (item:any)=>
                 {
                   console.log("id-check",this.productid==item.productid);
                   
                  //  console.log("item",item.productid);
                   if(this.productid == item.productid )
                   {
                     this.overview=item;
                   console.log("des",this.overview);
           
      
               
                  
                     
                   }
          
                   }
           )

                 }
                 
                 )

              
        
     }


  ngOnInit(): void {
this.addToCart
  }


//increment fun
incQnt(value:any){
  // console.log(value);
  if(value.qnt != value.instock)
  {
    value.qnt +=1;
  }
}
//decrement fun
decQnt(value:any){
  //console.log(value);
  if(value.qnt != 1)
  {
    value.qnt -=1;
  }
}


  ///addTocart function//
  addToCart(item:any)
  {  
//     let product = item.productid
// this.data.products= item.productid

console.log("product",item.productid);

  this.cart.addToCart(item.productid).subscribe( ()=>{ 

    console.log("addtocartDataaaaa:",item.productid)

this._route.navigate(['/cart'])
  }
  )
  }


}
