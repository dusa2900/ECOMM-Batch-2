import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CouponsComponent } from './DASHBOARD/coupons/coupons.component';
import { ViewUserComponent } from './DASHBOARD/view-user/view-user.component';
import { TrackerComponent } from './DASHBOARD/tracker/tracker.component';
import { FooterComponent } from './COMMON/footer/footer.component';
import { ReturnorderComponent } from './DASHBOARD/returnorder/returnorder.component';
import { ForgotpasswordUserComponent } from './DASHBOARD/forgotpassword-user/forgotpassword-user.component';
import { ProductlistStatusComponent } from './DASHBOARD/productlist-status/productlist-status.component';
import { SidenavComponent } from './COMMON/sidenav/sidenav.component';
import { HomeComponent } from './COMMON/home/home.component';
import { TransactionsComponent } from './DASHBOARD/transactions/transactions.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CouponsComponent,
    ViewUserComponent,
    TrackerComponent,
    FooterComponent,
    ProductlistStatusComponent,
    ReturnorderComponent,
    SidenavComponent,
    ForgotpasswordUserComponent,
    HomeComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule, FormsModule,NgxPaginationModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
