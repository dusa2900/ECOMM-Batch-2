import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/SERVICES/products.service';

@Component({
  selector: 'app-appearels',
  templateUrl: './appearels.component.html',
  styleUrls: ['./appearels.component.css']
})
export class AppearelsComponent implements OnInit {
  mensList:any=[];
  womensList:any=[];
  kidsList:any=[];
  constructor(private ps:ProductsService) { }

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

///base-64//
  //       let objectURL = 'data:image/png;base64,' + this.imagedata;
  //       this.base64Data = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
  // console.log("base-64-string",this.base64Data);



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
