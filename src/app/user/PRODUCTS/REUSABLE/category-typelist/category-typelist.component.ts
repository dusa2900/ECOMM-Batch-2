import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-category-typelist',
  templateUrl: './category-typelist.component.html',
  styleUrls: ['./category-typelist.component.scss']
})
export class CategoryTypelistComponent implements OnInit {
  category:any;
  selected:any=[];
    constructor(private route:ActivatedRoute, private bs:ApiService) {
    
      this.route.params.subscribe( params =>
       {
        //console.log("data:",params)
       //console.log("DTA:", this.category=params['category'])
       this.category=params['category']
       }
        
        );
      
       this.bs.getCategoryList().subscribe(
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
