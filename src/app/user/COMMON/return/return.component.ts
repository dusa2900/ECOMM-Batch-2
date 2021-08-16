
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
  constructor(private ps:ProductsService,private formbuilder:FormBuilder) { 
    this.commentForm=this.formbuilder.group({
      reason:['',[Validators.required,Validators.minLength(10)]],
      status:['',[Validators.required]],
      })
  }



  ngOnInit(){
    this.ps.getOrder().subscribe(res=>
      {
        this.order=res;
      }
      )

      this.ps.getOrders().subscribe(res=>{
        this.orders=res
      })
this.onReturn()

    }

    onReturn()
    { 
       console.log( this.returnProduct.nativeElement.value);
      this.reasonStatus=this.returnProduct.nativeElement.value;
      alert(`Return request send successfully`)
      this.reasonReturn=false;

      this.adminReturn=false
  
      this.ps.postreturnorder(value).subscribe(res=>

        {​​​
          console.log("lnkasr",res);
        
        }
      )
    }

}
function value(value: any) {
  throw new Error('Function not implemented.');
}

