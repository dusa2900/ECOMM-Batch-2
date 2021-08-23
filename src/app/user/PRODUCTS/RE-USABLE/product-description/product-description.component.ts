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
  id:any;
  overview:any;


 

    constructor(private route:ActivatedRoute, private _route:Router,private ps:ProductsService,private cart:CartService) {
      // console.log(route.params.subscribe(params=>this.id=params['id']))
      // console.log(this._route)
      this.route.params.subscribe(
        params=>this.id=params['id']);
  
        this.ps.getCategoryList().subscribe(
          res=>
         {
           res.forEach( (item:any)=>
                 {
                   console.log("item",item.id);
                   if(this.id == item.id )
                   {
                     this.overview=item;
                   
                  
                     
                   }
                   }
           )
                 }
                 
                 )

    
        
     }

  // enableZoom: Boolean = true;
  // previewImageSrc = 'pathToImage';
  // zoomImageSrc = 'pathToImage';
 
  // constructor(private ngxImgZoom: NgxImgZoomService) {
  //   this.ngxImgZoom.setZoomBreakPoints([{w: 100, h: 100}, {w: 150, h: 150}, {w: 200, h: 200}, {w: 250, h: 250}, {w: 300, h: 300}]);
  // }
  ngOnInit(): void {
    this.route.params.subscribe(
      params=>this.id=params['id']);

      this.ps.getCategoryList().subscribe(
        res=>
       {
         res.forEach( (item:any)=>
               {
                 console.log("item",item.id);
                 if(this.id == item.id )
                 {
                   this.overview=item;
                 
                
                   
                 }
                 }
         )
               }
               
               )
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
  addTocart(item:any)
  {  
  this.cart.addToCart(item).subscribe( ()=>{ 
     console.log("Data:",item)
    //this.msg.sendMsg(item);
  }
  )
  }
  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";

}
