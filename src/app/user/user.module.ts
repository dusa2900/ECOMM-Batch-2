import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{AngmaterialModule} from '../ANGMATERIAL/angmaterial.module';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
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
import { AppearelsComponent } from './PRODUCTS/APPEARELS/appearels/appearels.component';
import { ElectronicsComponent } from './PRODUCTS/ELECTORNIC/electronics/electronics.component';
import { HomeKitchenComponent } from './PRODUCTS/HOME&KITCHEN/home-kitchen/home-kitchen.component';
import {  HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserprofileComponent } from './COMMON/userprofile/userprofile.component';
import { ReturnComponent } from './COMMON/return/return.component';
import { ProductDescriptionComponent } from './PRODUCTS/RE-USABLE/product-description/product-description.component';
import { ProductCategoryTypeComponent } from './PRODUCTS/RE-USABLE/product-category-type/product-category-type.component';
import { MensWearComponent } from './PRODUCTS/APPEARELS/mens-wear/mens-wear.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { NgxPaginationModule } from 'ngx-pagination';


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
    AppearelsComponent,
    ElectronicsComponent,
    HomeKitchenComponent,
    UserprofileComponent,
    ReturnComponent,
 ProductDescriptionComponent,
 ProductCategoryTypeComponent,
 MensWearComponent
  ],
  imports: [
    CommonModule,HttpClientModule, ToastrModule.forRoot(),NgxPaginationModule,
    USERRoutingModule,AngmaterialModule,Ng2SearchPipeModule,
MatToolbarModule,FormsModule,ReactiveFormsModule ,NgxImageZoomModule,NgxImgZoomModule

  ]
})
export class USERModule { }
