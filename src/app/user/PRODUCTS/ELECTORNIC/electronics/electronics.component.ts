import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  // appearels1:any
  // appearels2:any
  laptopList:any=[];
  mobileList:any=[];
  homeappliancesList:any=[];

  // selectedItem:any=[];

  // isCategoryTypeList:boolean=true;

  constructor(private ps:ProductsService) { }

  ngOnInit() {
 
    

    this.ps.getProductsList().subscribe(
      res=>
      {
        console.log("electronics",res);
        
res.forEach((item:any) => {
  if(item.mCategoryName="electronics"){
    item.categories.forEach((category:any) => {

      if(category.categoryName=="Laptops"){
          this.laptopList=category.products
          console.log("laptopList",this.laptopList);
        }

///base-64//
    //       let objectURL = 'data:image/png;base64,' + this.imagedata;
    //       this.base64Data = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
    // console.log("base-64-string",this.base64Data);

  



      
     else if (category.categoryName=="Mobiles"){
        this.mobileList=category.products
        console.log("mobileList",this.mobileList);
    }
  else if(category.categoryName=="Home Appliances"){
      this.homeappliancesList=category.products
      console.log("homeappliancesList",this.homeappliancesList);
  }
    })

  }

})
     
}
              

      )

  }






}
