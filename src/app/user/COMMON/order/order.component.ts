import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcartService } from 'src/app/SERVICES/addcart.service';
import { ApiService } from 'src/app/SERVICES/api.service';
import { TrackComponent } from './track/track.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  
  orders:any;
  reasonReturn:boolean=true;
  @ViewChild('returnProduct') returnProduct!:ElementRef;

  reasonStatus:any;
  constructor(private cart:AddcartService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cart.Orders().subscribe( res=>this.orders=res)
  }

//CancelOrder function
cancelOrder(item:any){
//console.log(item.id);
 this.cart.CancelOrder(item).subscribe( (res:any)=>{
   console.log(res);
 })
 // this.cart.PostOrder(item).subscribe(res=>console.log(res));
}

//REturnOrder function
returnOrder(x:any)
{
console.log(x);
}


  onReturn()
  {
    console.log( this.returnProduct.nativeElement.value);
    this.reasonStatus=this.returnProduct.nativeElement.value;
    alert(`Return request send successfully`)
    this.reasonReturn=false;
  }

  openDialog() {​​​
    const dialogRef = this.dialog.open(TrackComponent);
    dialogRef.afterClosed().subscribe(result=> {​​​
    console.log(`Dialog result: ${​​​result}​​​`);
        }​​​);
      }​​​

}
