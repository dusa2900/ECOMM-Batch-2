import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Auth/auth.guard';
import { AddCartComponent } from './COMMON/add-cart/add-cart.component';
import { OrderComponent } from './COMMON/order/order.component';
import { TrackComponent } from './COMMON/order/track/track.component';

import { UserprofileComponent } from './COMMON/userprofile/userprofile.component';
import { HomeComponent } from './HOME/home/home.component';
import { MainComponent } from './HOME/main/main.component';

import { ForgetComponent } from './LOGIN/forget/forget.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { RegisterComponent } from './LOGIN/register/register.component';
import { ResetComponent } from './LOGIN/reset/reset.component';
import { AppearelComponent } from './PRODUCTS/appearel/appearel.component';
import { ElectronicComponent } from './PRODUCTS/electronic/electronic.component';
import { HomeKitchenComponent } from './PRODUCTS/home-kitchen/home-kitchen.component';



import { CategoryTypelistComponent } from './PRODUCTS/REUSABLE/category-typelist/category-typelist.component';
import { ProductDescriptionComponent } from './PRODUCTS/REUSABLE/product-description/product-description.component';


const routes: Routes = [
  {
    path: 'main',   component:MainComponent ,    canActivate:[AuthGuard],
    children: [
      { path: '',component:HomeComponent }
    ]
  },
  
  {  path:'',  component:MainComponent,
      children: [
              { path: '',component:HomeComponent  },    
              { path: 'user', component:UserprofileComponent ,canActivate:[AuthGuard] },
              { path: 'forget',component:ForgetComponent},
              { path: 'login', component:LoginComponent   },

              { path: 'register',component:RegisterComponent},
              { path: 'reset', component:ResetComponent },
              {path:'cart', component: AddCartComponent},
              {path:'return', component: OrderComponent},
              {path:'track', component: TrackComponent},
              
              //APPEARELS
             { path:'appearels',component:AppearelComponent},
          

                // ELECTORNICS
               { path:'electronics', component:ElectronicComponent},

               // Home & Kitchen
               { path:'home&kitchen', component:HomeKitchenComponent},
            
              ////Re-usable components//
                { path: 'products/:category', component:CategoryTypelistComponent },
                { path: 'totalproducts/:category', component:CategoryTypelistComponent },
                { path: 'product/:category/:id', component:ProductDescriptionComponent },
           
       ]
        }
    ]
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class USERRoutingModule { }
