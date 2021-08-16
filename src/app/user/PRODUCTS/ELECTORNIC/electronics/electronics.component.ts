import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  // appearels1:any
  // appearels2:any
  mensList:any=[];
  womensList:any=[];
  kidsList:any=[];
  // selectedItem:any=[];

  // isCategoryTypeList:boolean=true;

  constructor(private ps:ProductsService,private _route:Router) { }

  ngOnInit(): void {

    this.ps.getAppearelssList().subscribe(
      res=>
      {

        this.mensList=res.apparels.menswear;
        this.womensList=res.apparels.womenswear;
        this.kidsList=res.apparels.kidswear;
        console.log(this.mensList);
        console.log(this.womensList);
        console.log(this.kidsList);
      }
              

      )

  }



// onClick(value:any)
// {
//   this._product.getAppearelssList().subscribe(

//     res=>
//     {
//       this.appearels1=res.apparels.menswear;
//       this.appearels2=res.apparels.womenswear;
//       this.appearels1.forEach( (item:any)=>
//       {
//         if(value == item.category)
//         {
//           this.selectedItem.push(item);
//           this.isCategoryTypeList=false;
       
//           console.log("Selected Men Items:", this.selectedItem);
//         }
//       }
      
//       )
//       this.appearels2.forEach( (item:any)=>
//       {
//         if(value == item.category)
//         {
//           this.selectedItem.push(item);
        
//            this.isCategoryTypeList=false;
//           console.log("Selected Women Items:", this.selectedItem);
//         }
//       }
      
//       )

//     }
//   )
// }





}
