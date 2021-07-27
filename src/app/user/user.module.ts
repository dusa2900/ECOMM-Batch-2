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
import { MensWearComponent } from './PRODUCTS/APPEARELS/mens-wear/mens-wear.component';
import { WomensWearComponent } from './PRODUCTS/APPEARELS/womens-wear/womens-wear.component';
import { KidsWearComponent } from './PRODUCTS/APPEARELS/kids-wear/kids-wear.component';
import { MobilesComponent } from './PRODUCTS/ELECTORNIC/mobiles/mobiles.component';
import { LaptopsComponent } from './PRODUCTS/ELECTORNIC/laptops/laptops.component';
import { HomeAppliancesComponent } from './PRODUCTS/ELECTORNIC/home-appliances/home-appliances.component';
import { KitchenItemsComponent } from './PRODUCTS/HOME&KITCHEN/kitchen-items/kitchen-items.component';
import { HomeFurnituringsComponent } from './PRODUCTS/HOME&KITCHEN/home-furniturings/home-furniturings.component';
import { AddCartComponent } from './COMMON/add-cart/add-cart.component';
import { HomeComponent } from './HOME/home/home.component';
import { PaymentComponent } from './PAYMENTS/payment/payment.component';
import { MainComponent } from './HOME/main/main.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselComponent } from './HOME/carousel/carousel.component';
import { AppearelsComponent } from './PRODUCTS/APPEARELS/appearels/appearels.component';
import { ElectronicsComponent } from './PRODUCTS/ELECTORNIC/electronics/electronics.component';
import { HomeKitchenComponent } from './PRODUCTS/HOME&KITCHEN/home-kitchen/home-kitchen.component';
import {  HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserprofileComponent } from './COMMON/userprofile/userprofile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    MensWearComponent,
    WomensWearComponent,
    KidsWearComponent,
    MobilesComponent,
    LaptopsComponent,
    HomeAppliancesComponent,
    KitchenItemsComponent,
    HomeFurnituringsComponent,
    AddCartComponent,
    HomeComponent,
    PaymentComponent,
    MainComponent,
    CarouselComponent,
    AppearelsComponent,
    ElectronicsComponent,
    HomeKitchenComponent,
    UserprofileComponent,
 
  ],
  imports: [
    CommonModule,HttpClientModule, ToastrModule.forRoot(),
    USERRoutingModule,AngmaterialModule,
MatToolbarModule,FormsModule,ReactiveFormsModule 

  ]
})
export class USERModule { }
