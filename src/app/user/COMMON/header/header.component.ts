import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CartService } from 'src/app/SERVICES/cart.service';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Sign in";
  authorised: boolean = false;
  public totalItem: number = 0;
  constructor(private cartService: CartService, public dialog: MatDialog,private ecomm:EcommService,private router: Router) { }



  ngOnInit() {
    this.getuser()
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }


  openDialog() {
    const dialogRef = this.dialog.open(UserprofileComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}​​​`);
    });
  }

  logout() {
    localStorage.clear();
    this.authorised = false;
    this.title = 'Sign In'
    this.router.navigate([''])
  }


  getuser()
{​​​
this.ecomm.getprofile().subscribe( res=>{​​​
console.log('username',res.Name)
this.title=`${​​​res.Name}​​​`;
this.authorised=true;
}​​​)
}​​​

}
