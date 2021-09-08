
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/SERVICES/cart.service';
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  order:any=[];
 orders:any=[]
  reasonReturn:boolean=true;
  @ViewChild('returnProduct') returnProduct!:ElementRef;

  reasonStatus:any;
 adminStatus:any;
  adminReturn: boolean=true;
  commentForm:any
  products: any[]=[];
  constructor(private cs:CartService,private formbuilder:FormBuilder) { 
    this.commentForm=this.formbuilder.group({
      reason:['',[Validators.required,Validators.minLength(10)]],
      status:['',[Validators.required]],
      })
  }


  public color:number=50;
  public width:any;
  public bgcolor1:any="#3268ff";
  public bgcolor2:any;
  public bgcolor3:any;
  public bgcolor4:any;

 

  fun()

  {
    if(this.color == 0)
    {
      this.width="5%";
      this.bgcolor1="#3268ff"
    }
   else if (this.color >= 0 && this.color < 40) {
  this.width="34%";
    this.bgcolor2="#3268ff"
    }
    else if (this.color >= 40 && this.color < 80) {
      this.width="66%";
      this.bgcolor2="#3268ff";
      this.bgcolor3="#3268ff"
    }
    
    else if (this.color >= 80) {
      this.width="100%";
      this.bgcolor2="#3268ff";
      this.bgcolor3="#3268ff";
      this.bgcolor4="#3268ff"
    }
    else {
      console.log("No color");
    }
  
}

  ngOnInit(){
    // this.fun()
    this.cs.Orders().subscribe(res=>
      {
        this.order=res;
        res.map((item:any) => {


  item.paycartS.map((item:any) => {

    // this.products=item.product
    this.products.push(item.product)
    console.log("item",this.products);


    
  })
          


        })
  
        console.log("get orders",res);
        
      }
      )

      // this.cs.getOrders().subscribe(res=>{
      //   this.orders=res
      // })
// this.onReturn()

    }

    // onReturn()
    // { 
    //    console.log( this.returnProduct.nativeElement.value);
    //   this.reasonStatus=this.returnProduct.nativeElement.value;
    //   alert(`Return request send successfully`)
    //   this.reasonReturn=false;

    //   this.adminReturn=false
  
      // this.ps.postreturnorder(value).subscribe(res=>

      //   {​​​
      //     console.log("lnkasr",res);
        
      //   }
      // )
    // }

}
// function value(value: any) {
//   throw new Error('Function not implemented.');
// }

