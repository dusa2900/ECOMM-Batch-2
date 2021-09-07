import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Auth/auth.guard';


import { SidenavComponent } from './COMMON/sidenav/sidenav.component';
import { CouponsComponent } from './DASHBOARD/coupons/coupons.component';
import { DashboardComponent } from './DASHBOARD/dashboard/dashboard.component';
import { ForgotpasswordUserComponent } from './DASHBOARD/forgotpassword-user/forgotpassword-user.component';
import { ProductlistStatusComponent } from './DASHBOARD/productlist-status/productlist-status.component';
import { ReturnorderComponent } from './DASHBOARD/returnorder/returnorder.component';
import { TransactionsComponent } from './DASHBOARD/transactions/transactions.component';
import { ViewUserComponent } from './DASHBOARD/view-user/view-user.component';

const routes: Routes = [

  {path: '',component:SidenavComponent,  data: {
    breadcrumb: 'admin' },
  children: [
    {path: '',component:DashboardComponent,
    data: {
      breadcrumb: 'admin' }
  } ,


   { path: 'coupons',component:CouponsComponent,
      data: {
        breadcrumb: 'Coupons' }
    },
    {path: 'productlist',component:ProductlistStatusComponent,   data: {
      breadcrumb: 'productlist' }
  },
    {path: 'viewusers',component:ViewUserComponent,    
     data: {
      breadcrumb: 'viewusers' }
    },
    {path: 'forgotpassword',component:ForgotpasswordUserComponent,
    data: {
      breadcrumb: 'forgotpassword' }},
    {path: 'Transactions',component:TransactionsComponent,   
      data: {
      breadcrumb: 'Transactions' }
    },
    {path: 'returnorder',component:ReturnorderComponent,
    data: {
      breadcrumb: 'returnorder' }
    },
 




  ]},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
