import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './COMMON/home/home.component';
import { SidenavComponent } from './COMMON/sidenav/sidenav.component';
import { CouponsComponent } from './DASHBOARD/coupons/coupons.component';
import { ProductlistStatusComponent } from './DASHBOARD/productlist-status/productlist-status.component';

const routes: Routes = [
  {path: '',component:HomeComponent,

  children: [
    {path: 'coupons',component:CouponsComponent},
    {path: 'productlist',component:ProductlistStatusComponent}
  ]},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
