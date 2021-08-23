import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CartService } from 'src/app/SERVICES/cart.service';
import { EcommService } from 'src/app/SERVICES/ecomm.service';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string="Sign in";
  authorised:boolean=false;
  // cartCount:number=0;
  @ViewChild('userInput') userInput!:ElementRef;
  searchInput:any;
  
  secondNavbar:any=[];
  public totalItem : number = 0;
  constructor(private cartService : CartService,public dialog: MatDialog,private ecomm:EcommService,private hc:HttpClient, private route:Router) {
    
   }
  
  ngOnInit() {
    this.cartService.getProducts()
    .subscribe((res:any)=>{
      console.log(res);
      this.totalItem = res.length;
    })
    this.cartService.getCartItems().subscribe((res:any)=>{
      this.totalItem=res.length
    })
   
    // calcTotal() {
    //   return this.products.reduce((acc, pr) => acc+= pr.num , 0);
    // }
  
    this.signin();
    this.ecomm.getSecondNavbar().subscribe(
      res=>this.secondNavbar=res
    )
  }
  
  onSearch()
  {
      console.log(this.userInput.nativeElement.value);
     if(this.userInput.nativeElement.value=='m' || this.userInput.nativeElement.value=='men'  || this.userInput.nativeElement.value=='mens')
    {
      this.route.navigate(['appearels/menswear'])
    }
    else if( this.userInput.nativeElement.value=='kid'  || this.userInput.nativeElement.value=='kids')
    {
      this.route.navigate(['appearels/kidswear'])
    }
    else if(this.userInput.nativeElement.value=='w' || this.userInput.nativeElement.value=='women'  || this.userInput.nativeElement.value=='womens')
    {
      this.route.navigate(['appearels/womenswear'])
    }
    else if(this.userInput.nativeElement.value=='h' || this.userInput.nativeElement.value=='home'  || this.userInput.nativeElement.value=='home appluances')
    {
      this.route.navigate(['electronics/homeappliances'])
    }
    else if(this.userInput.nativeElement.value=='l' || this.userInput.nativeElement.value=='laptop'  || this.userInput.nativeElement.value=='laptops')
    {
      this.route.navigate(['electronics/laptops'])
    }
    else if(this.userInput.nativeElement.value=='m' || this.userInput.nativeElement.value=='mobile'  || this.userInput.nativeElement.value=='mobiles')
    {
      this.route.navigate(['electronics/mobiles'])
    }
    else if(this.userInput.nativeElement.value=='home furn' || this.userInput.nativeElement.value=='home-furnituring'  )
    {
      this.route.navigate(['home-kitchen/home-furnituring'])
    }
    else if(this.userInput.nativeElement.value=='kitchen' || this.userInput.nativeElement.value=='kitchen items'  )
    {
      this.route.navigate(['home-kitchen/kitchen-items'])
    }
    else
    {
      this.route.navigate(['']);
    }
     
  
  }
  
  signin()
  {
    
    this.ecomm.getprofile().subscribe( res=>{
      console.log('username',res.Name)
      this.title=`${res.Name}`;
      this.authorised=true;
    })
  }
  
  openDialog() {​​​
  const dialogRef = this.dialog.open(UserprofileComponent);
  dialogRef.afterClosed().subscribe(result=> {​​​
  console.log(`Dialog result: ${​​​result}​​​`);
      }​​​);
    }​​​
  
  
  logout()
  {
    localStorage.clear();
    this.authorised=false;
    this.title='Sign In'
    this.route.navigate(['/login']);
    
  }
  
}
