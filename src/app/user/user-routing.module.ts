import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartComponent } from './COMMON/add-cart/add-cart.component';
import { UserprofileComponent } from './COMMON/userprofile/userprofile.component';
import { HomeComponent } from './HOME/home/home.component';
import { MainComponent } from './HOME/main/main.component';
import { ForgetComponent } from './LOGIN/forget/forget.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { RegisterComponent } from './LOGIN/register/register.component';
import { ResetComponent } from './LOGIN/reset/reset.component';
import { AppearelsComponent } from './PRODUCTS/APPEARELS/appearels/appearels.component';
import { KidsWearComponent } from './PRODUCTS/APPEARELS/kids-wear/kids-wear.component';
import { MensWearComponent } from './PRODUCTS/APPEARELS/mens-wear/mens-wear.component';
import { WomensWearComponent } from './PRODUCTS/APPEARELS/womens-wear/womens-wear.component';
import { ElectronicsComponent } from './PRODUCTS/ELECTORNIC/electronics/electronics.component';
import { HomeAppliancesComponent } from './PRODUCTS/ELECTORNIC/home-appliances/home-appliances.component';
import { LaptopsComponent } from './PRODUCTS/ELECTORNIC/laptops/laptops.component';
import { MobilesComponent } from './PRODUCTS/ELECTORNIC/mobiles/mobiles.component';
import { HomeFurnituringsComponent } from './PRODUCTS/HOME&KITCHEN/home-furniturings/home-furniturings.component';
import { HomeKitchenComponent } from './PRODUCTS/HOME&KITCHEN/home-kitchen/home-kitchen.component';
import { KitchenItemsComponent } from './PRODUCTS/HOME&KITCHEN/kitchen-items/kitchen-items.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children: [
      {
        path: '',
        component:HomeComponent 
      },
      {
        path: 'user',
        component:UserprofileComponent 
      },
      {
        path: 'login',
        component:LoginComponent 
      },
      {
        path: 'forget',
        component:ForgetComponent
      },
      {
        path: 'register',
        component:RegisterComponent
      },
    
      {
        path: 'reset',
        component:ResetComponent
      },
      {path:'cart', component: AddCartComponent},
      //APPEARELS
      {
        path:'appearels',
        component:AppearelsComponent},
   
         
      {
        path: 'appearels/kidswear',
        component:KidsWearComponent
      },
      {
        path: 'appearels/menswear',
        component:MensWearComponent
      },
      {
        path: 'appearels/womenswear',
        component:WomensWearComponent
      },

  // ELECTORNICS
  {
    path:'electronics',
    component:ElectronicsComponent},

   
  {
    path: 'electronics/homeappliances',
    component:HomeAppliancesComponent
  },
  {
    path: 'electronics/laptops',
    component:LaptopsComponent
  },
  {
    path: 'electronics/mobiles',
    component:MobilesComponent
  },



///HOME AND KITCHEN

{
  path:'home-kitchen',
  component:HomeKitchenComponent},

  
{
  path: 'home-kitchen/home-furnituring',
  component:HomeFurnituringsComponent
},
{
  path: 'home-kitchen/kitchen-items',
  component:KitchenItemsComponent
}
]
}
    ]
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class USERRoutingModule { }
