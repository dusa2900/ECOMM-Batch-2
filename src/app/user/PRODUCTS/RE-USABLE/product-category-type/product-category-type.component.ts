import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { SortPipe } from '../../../../PIPES/sort.pipe';
import { product } from '../../../../MODEL/model';
import { LoaderService } from 'src/app/SERVICES/loader.service';
@Component({
  selector: 'app-product-category-type',
  templateUrl: './product-category-type.component.html',
  styleUrls: ['./product-category-type.component.css']
})
export class ProductCategoryTypeComponent implements OnInit {
  categorys:any;
  selected:any=[];
  pricetype: string="All";
    constructor(private route:ActivatedRoute, private ps:ProductsService,public loaderservice:LoaderService) {
    
      this.route.params.subscribe( params =>
       {

       console.log("DTA-cata:", this.categorys=params['categorys'])
       this.categorys=params['categorys']
       
       }
        
        );

      }
  

       filterall(value:any){
        if(value.target.value==="All"){
          this.selected = []
          this.getitemlist()
        }
        console.log(value.target.value)
      }

      getitemlist(){
        this.ps.getCategoryList().subscribe(
          res => {
            res.map((item:any)=>{
              console.log("data-check",this.categorys===item.categorys);
              if(this.categorys === item.categorys )
              {
            
                this.selected.push(item);
             
              
            
               }
            })
          }
     
        )
      }
    ngOnInit() {
    this.getitemlist()
    }
  

}
