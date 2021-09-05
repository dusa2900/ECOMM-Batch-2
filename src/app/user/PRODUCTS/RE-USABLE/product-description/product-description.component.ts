import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { NgxImgZoomService } from "ngx-img-zoom";
import { CartService } from 'src/app/SERVICES/cart.service';
import { LoginAuthService } from 'src/app/SERVICES/login.auth.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  productid:any;
  overview:any;
  // data={products:null};

  // data={products:null};
  id:any;
currentrating:any;
commentsForm:any;
commentpost:any;
  desproductid: any;

  form:any;
  hint: any;


    constructor(private route:ActivatedRoute,private fb:FormBuilder, private _route:Router,private ps:ProductsService,private cart:CartService, private loginauth:LoginAuthService) {



      this.route.params.subscribe(
        params=>this.productid=params['productid']);
  console.log("id",this.productid);
  
        this.ps.getCategoryList().subscribe(
          res=>
         {
           res.map( (item:any)=>
                 {
                   console.log("id-check",this.productid==item.productid);
                   
                  //  console.log("item",item.productid);
                   if(this.productid == item.productid )
                   {
                     this.overview=item;
                   console.log("descc",this.overview.image);
           sessionStorage.setItem('productid',this.overview.productid)
      
               
                  
                     
                   }
          
                   }
           )

                 }
                 
                 )

              
        
     }



     ngOnInit(): void {
      this.getComments()
      this.commentsForm=this.fb.group({
        
        personname:["",Validators.required],
        comments:["",[Validators.required,Validators.minLength(10)]],
        rating1: ['', Validators.required],
        
    
      })
    }

  getComments(){

    this.ps.getComments().subscribe(
      (res)=>{
      
        res.map((element:any) => {

          
          console.log("getresponse",res);
  
          if(this.productid ==element.commentsid )
          {
            console.log("comentsceckkkkk",this.productid ==element.id  );
            this.commentpost=element;
            console.log("tttttt",this.commentpost)
            this.hint=element.rating1

          }
        });


      },
      (err)=>{
        // alert("server issue")
  
      }
    )
  }
  
  saveComment(value:any){
  
    this.ps.postComments(value).subscribe(
      
      (res)=>{
  
        console.log("post dataaaaaaaaaa",res);

        
        
        alert("comment posted successfully")
  
  },
  err=>{
    console.log("err",err);
    
  }
  
    )
    // alert ("comment posted succesfully")
  }




  ///addTocart function//
  addToCart(item:any)
  {  
//     let product = item.productid
// this.data.products= item.productid

if(this.loginauth.isLoggedIn()){
  this.cart.addToCart(item.productid).subscribe( ()=>{ 

    // console.log("addtocartDataaaaa:",item.productid)

this._route.navigate(['/cart'])
  }
  )
}

else{
this._route.navigate(['/login'])
}

 


  }


}
