import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-product-category-type',
  templateUrl: './product-category-type.component.html',
  styleUrls: ['./product-category-type.component.css']
})
export class ProductCategoryTypeComponent implements OnInit {
  category:any;
  selected:any=[];
    constructor(private route:ActivatedRoute, private ps:ProductsService) {
    
      this.route.params.subscribe( params =>
       {
        //console.log("data:",params)
       //console.log("DTA:", this.category=params['category'])
       this.category=params['category']
       }
        
        );
      
       this.ps.getCategoryList().subscribe(
       res=>
      {
        res.forEach( (item:any)=>
              {
                ///console.log("item function value:",item.category);
                if(this.category == item.category )
                {
                  this.selected.push(item);
                
               
                  //console.log("Selected Men shirt Items:", this.selected);
                }else if(this.category== item.type)
                {
                  this.selected.push(item);
                }
                }
        )
              }
              
              )
  
  
  
             
      
        
     }
    ngOnInit(): void {
    
    }
  

}
