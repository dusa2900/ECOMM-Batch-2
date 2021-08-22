import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddcartService } from 'src/app/SERVICES/addcart.service';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  id:any;
  
  overview:any;
    constructor(private route:ActivatedRoute, private bs:ApiService, private cart:AddcartService) {
    
      this.route.params.subscribe(
        params=>this.id=params['id']);
  
        this.bs.getCategoryList().subscribe(
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


  ngOnInit(): void {
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


}
