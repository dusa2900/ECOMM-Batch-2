import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-home-kitchen',
  templateUrl: './home-kitchen.component.html',
  styleUrls: ['./home-kitchen.component.css']
})
export class HomeKitchenComponent implements OnInit {
 
  homekitchenList:any=[]; 
homefurnitureList:any=[];

  constructor(private ps:ProductsService) { }

  ngOnInit() {
 
    

    this.ps.getProductsList().subscribe(
      res=>
      {
        console.log("electronics",res);
        
res.map((item:any) => {
  if(item.mCategoryName="electronics"){
    item.categories.map((category:any) => {

      if(category.categoryName=="Kitchen Items"){
          this.homekitchenList=category.products
          console.log("homekitchenList",this.homekitchenList);
        }

///base-64//
    //       let objectURL = 'data:image/png;base64,' + this.imagedata;
    //       this.base64Data = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
    // console.log("base-64-string",this.base64Data);

  



      
     else if (category.categoryName=="Home furniture"){
        this.homefurnitureList=category.products
        console.log("homefurnitureList",this.homefurnitureList);
    }
  // else if(category.categoryName=="Home Appliances"){
  //     this.homeappliancesList=category.products
  //     console.log("homeappliancesList",this.homeappliancesList);
  // }
    })

  }

})
     
}
              

      )

  }


}
