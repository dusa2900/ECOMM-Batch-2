import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CartService } from 'src/app/SERVICES/cart.service';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { LoginAuthService } from 'src/app/SERVICES/login.auth.service';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:any;
  authorised:boolean=false;

  // cartCount:number=0;
  @ViewChild('userInput') userInput!:ElementRef;
  searchInput:any;
  
  secondNavbar:any=[];
  public totalItem :any;
  name: any;
  constructor(private cartService : CartService,public loginauth:LoginAuthService ,public dialog: MatDialog,private ecomm:EcommService,private hc:HttpClient, private route:Router) {
    
   }
  
  ngOnInit() {

    this.ecomm.getSecondNavbar().subscribe(
      res=>this.secondNavbar=res
    )
  }
  
  public userName()
{
  this.title=this.loginauth.getEmail()
  //console.log("userName",this.userAuth.getEmail())
}
 

public cartlength()
{
 return this.totalItem=this.loginauth.getCartLength()
  console.log("cartlength",this.totalItem)
}


public isLoggedIn() {
  this.userName();
  return this.loginauth.isLoggedIn();
}
  // onSearch()
  // {
  //     console.log(this.userInput.nativeElement.value);
  //    if(this.userInput.nativeElement.value=='m' || this.userInput.nativeElement.value=='men'  || this.userInput.nativeElement.value=='mens')
  //   {
  //     this.route.navigate(['appearels/menswear'])
  //   }
  //   else if( this.userInput.nativeElement.value=='kid'  || this.userInput.nativeElement.value=='kids')
  //   {
  //     this.route.navigate(['appearels/kidswear'])
  //   }
  //   else if(this.userInput.nativeElement.value=='w' || this.userInput.nativeElement.value=='women'  || this.userInput.nativeElement.value=='womens')
  //   {
  //     this.route.navigate(['appearels/womenswear'])
  //   }
  //   else if(this.userInput.nativeElement.value=='h' || this.userInput.nativeElement.value=='home'  || this.userInput.nativeElement.value=='home appluances')
  //   {
  //     this.route.navigate(['electronics/homeappliances'])
  //   }
  //   else if(this.userInput.nativeElement.value=='l' || this.userInput.nativeElement.value=='laptop'  || this.userInput.nativeElement.value=='laptops')
  //   {
  //     this.route.navigate(['electronics/laptops'])
  //   }
  //   else if(this.userInput.nativeElement.value=='m' || this.userInput.nativeElement.value=='mobile'  || this.userInput.nativeElement.value=='mobiles')
  //   {
  //     this.route.navigate(['electronics/mobiles'])
  //   }
  //   else if(this.userInput.nativeElement.value=='home furn' || this.userInput.nativeElement.value=='home-furnituring'  )
  //   {
  //     this.route.navigate(['home-kitchen/home-furnituring'])
  //   }
  //   else if(this.userInput.nativeElement.value=='kitchen' || this.userInput.nativeElement.value=='kitchen items'  )
  //   {
  //     this.route.navigate(['home-kitchen/kitchen-items'])
  //   }
  //   else
  //   {
  //     this.route.navigate(['']);
  //   }
     
  
  // }
  

  
  openDialog() {​​​
  const dialogRef = this.dialog.open(UserprofileComponent);
  dialogRef.afterClosed().subscribe(result=> {​​​
  console.log(`Dialog result: ${​​​result}​​​`);
      }​​​);
    }​​​
  
  
    logout()
    {
      this.title="";
      this.loginauth.clear();
      this.route.navigate(['/login']);
      
    }
}
