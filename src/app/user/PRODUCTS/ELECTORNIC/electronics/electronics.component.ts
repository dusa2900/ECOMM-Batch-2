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
  mensList:any=[];
  womensList:any=[];
  kidsList:any=[];
  Image: any;
  // selectedItem:any=[];

  // isCategoryTypeList:boolean=true;

  constructor(private ps:ProductsService,private _route:Router,  public _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
 
    

    this.ps.getProductsList().subscribe(
      res=>
      {
res.forEach((item:any) => {
  if(item.mCategoryName="appearels"){
    item.categories.forEach((category:any) => {

      if(category.categoryName=="menswear"){
          this.mensList=category.products

    //           this.Image = this._DomSanitizationService.bypassSecurityTrustUrl(
    //   `data:image/svg;base64,${this.mensList[0].image}`

    // );

//     const reader = new FileReader();
// reader.onload = (e) => this.Image =  this.mensList.image;
// reader.readAsDataURL(new Blob([data]));




          console.log("mens",this.mensList);
      }
      if(category.categoryName=="womenswear"){
        this.mensList=category.products
        console.log("womens",this.mensList);
    }
    if(category.categoryName=="kidswear"){
      this.mensList=category.products
      console.log("kids",this.mensList);
  }
    })

  }

})
     
}
              

      )

  }






}
