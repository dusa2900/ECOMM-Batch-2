import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{AngmaterialModule} from '../ANGMATERIAL/angmaterial.module';

import { USERRoutingModule } from './user-routing.module';
import { HeaderComponent } from './COMMON/header/header.component';
import { FooterComponent } from './COMMON/footer/footer.component';
import { RegisterComponent } from './LOGIN/register/register.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { ForgetComponent } from './LOGIN/forget/forget.component';
import { ResetComponent } from './LOGIN/reset/reset.component';

import { AddCartComponent } from './COMMON/add-cart/add-cart.component';
import { HomeComponent } from './HOME/home/home.component';
import { PaymentComponent } from './PAYMENTS/payment/payment.component';
import { MainComponent } from './HOME/main/main.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselComponent } from './HOME/carousel/carousel.component';

import {  HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserprofileComponent } from './COMMON/userprofile/userprofile.component';

import { OrderComponent } from './COMMON/order/order.component';
import { TrackComponent } from './COMMON/order/track/track.component';


import { NgxImgZoomModule } from 'ngx-img-zoom';
import { CategoryTypelistComponent } from './PRODUCTS/REUSABLE/category-typelist/category-typelist.component';
import { ProductDescriptionComponent } from './PRODUCTS/REUSABLE/product-description/product-description.component';
import { AppearelComponent } from './PRODUCTS/appearel/appearel.component';
import { ElectronicComponent } from './PRODUCTS/electronic/electronic.component';
import { HomeKitchenComponent } from './PRODUCTS/home-kitchen/home-kitchen.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
  
    AddCartComponent,
    HomeComponent,
    PaymentComponent,
    MainComponent,
    CarouselComponent,
  
    UserprofileComponent,
   
    OrderComponent,
        TrackComponent,
   
        CategoryTypelistComponent,
        ProductDescriptionComponent,
        AppearelComponent,
        ElectronicComponent,
        HomeKitchenComponent,
      
  ],
  imports: [
    CommonModule,HttpClientModule, ToastrModule.forRoot(),
    USERRoutingModule,AngmaterialModule,
MatToolbarModule,FormsModule,ReactiveFormsModule ,NgxImgZoomModule

  ]
})
export class USERModule { }
