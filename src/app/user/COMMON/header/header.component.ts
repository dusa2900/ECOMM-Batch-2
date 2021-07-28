import { Component, OnInit } from '@angular/core';

    import {​​​ MatDialog }​​​ from'@angular/material/dialog';

import { CartService } from 'src/app/SERVICES/cart.service';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
login:string="Sign in";
// cartCount:number=0;

public totalItem : number = 0;
constructor(private cartService : CartService,public dialog: MatDialog) { }

ngOnInit() {
  this.cartService.getProducts()
  .subscribe(res=>{
    this.totalItem = res.length;
  })
}


openDialog() {​​​
const dialogRef = this.dialog.open(UserprofileComponent);
dialogRef.afterClosed().subscribe(result=> {​​​
console.log(`Dialog result: ${​​​result}​​​`);
    }​​​);
  }​​​


}
