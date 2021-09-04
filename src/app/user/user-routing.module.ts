import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Auth/auth.guard';
import { UserGuard } from '../Auth/user.guard';
import { AddCartComponent } from './COMMON/add-cart/add-cart.component';
import { ReturnComponent } from './COMMON/return/return.component';
import { HomeComponent } from './HOME/home/home.component';
import { MainComponent } from './HOME/main/main.component';
import { ForgetComponent } from './LOGIN/forget/forget.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { RegisterComponent } from './LOGIN/register/register.component';
import { ResetComponent } from './LOGIN/reset/reset.component';
import { PaymentComponent } from './PAYMENTS/payment/payment.component';
import { AppearelsComponent } from './PRODUCTS/APPEARELS/appearels/appearels.component';
import { MensWearComponent } from './PRODUCTS/APPEARELS/mens-wear/mens-wear.component';
import { ElectronicsComponent } from './PRODUCTS/ELECTORNIC/electronics/electronics.component';
import { HomeKitchenComponent } from './PRODUCTS/HOME&KITCHEN/home-kitchen/home-kitchen.component';
import { ProductCategoryTypeComponent } from './PRODUCTS/RE-USABLE/product-category-type/product-category-type.component';
import { ProductDescriptionComponent } from './PRODUCTS/RE-USABLE/product-description/product-description.component';

const routes: Routes = [

// {path:"",redirectTo:"user",pathMatch:"full"},
{​​​  path:'',  component:MainComponent,
children: [
  {​​​ path:'payment',component:PaymentComponent }​​​,
           {​​​ path:'',component:HomeComponent  }​​​,    
           {​​​ path:'forget',component:ForgetComponent}​​​,
           {​​​ path:'login', component:LoginComponent }​​​,
           {​​​ path:'register',component:RegisterComponent}​​​,
           {​​​ path:'reset', component:ResetComponent }​​​,


           {​​​path:'cart', component:AddCartComponent}​​​,
           {​​​path:'return', component:ReturnComponent}​,
////reusable-common/////


           {​​​​​​​​ path:'products/:categorys', component:ProductCategoryTypeComponent }​​​​​​​​,
           {​​​​​​​​ path:'products/:categorys/:productid', component:ProductDescriptionComponent }​​​​​​​​,

//APPEARELS
           {​​​ path:'appearels',component:AppearelsComponent}​​​,
           {​​​ path:'appearels/menswear',component:MensWearComponent}​​​,

// ELECTORNICS
             {​​​ path:'electronics', component:ElectronicsComponent}​​​,



        
///HOME AND KITCHEN
           {​​​ path:'home-kitchen', component:HomeKitchenComponent}​​​,
    ]
     }​​​,


 ]

    
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class USERRoutingModule { }
