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
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  imagedata: any;

  // selectedItem:any=[];

  // isCategoryTypeList:boolean=true;

  constructor(private ps:ProductsService,private _route:Router,  public _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
 
    

    this.ps.getProductsList().subscribe(
      res=>
      {
        console.log("dataaaa",res);
        
res.forEach((item:any) => {
  if(item.mCategoryName="appearels"){
    item.categories.forEach((category:any) => {

      if(category.categoryName=="menswear"){
          this.mensList=category.products
          this.mensList.forEach((img:any)=>{
            this.imagedata=img.image
            console.log("check-img-byte",this.imagedata);
            
          })

///4//
          let objectURL = 'data:image/png;base64,' + this.imagedata;
          this.base64Data = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
    console.log("base-64-string",this.base64Data);

          ///0/////
     this.retrievedImage = this._DomSanitizationService.bypassSecurityTrustUrl(
      `data:image/jpeg;base64,${this.imagedata}`
      
    );
    console.log("base-642222-string",this.retrievedImage);

////111///
 
          // this.retrieveResonse = this.imagedata.image;
    
          // this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse;
          // console.log("img",this.retrievedImage);
///2222///

      //     let objectURL = 'data:image/png;base64,' + this.imagedata.image;
      // console.log("image2222",objectURL);

      //     this.base64Data = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
      // console.log("imageeeee",this.base64Data);
      
    
//   }
// }

///555///

//     const reader = new FileReader();
// reader.onload = (e) => this.Image =  this.mensList.image;
// reader.readAsDataURL(new Blob([data]));




          console.log("mens",this.mensList);
      }
     else if (category.categoryName=="womenswear"){
        this.womensList=category.products
        console.log("womens",this.womensList);
    }
  else if(category.categoryName=="kidswear"){
      this.kidsList=category.products
      console.log("kids",this.kidsList);
  }
    })

  }

})
     
}
              

      )

  }






}
