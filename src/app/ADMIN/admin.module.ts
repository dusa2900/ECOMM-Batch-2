import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CouponsComponent } from './DASHBOARD/coupons/coupons.component';
import { PaymentsComponent } from './DASHBOARD/payments/payments.component';
import { ViewUserComponent } from './DASHBOARD/view-user/view-user.component';
import { TrackerComponent } from './DASHBOARD/tracker/tracker.component';
import { FooterComponent } from './COMMON/footer/footer.component';
import { SidenavBarComponent } from './COMMON/sidenav-bar/sidenav-bar.component';
import { ReturnorderComponent } from './DASHBOARD/returnorder/returnorder.component';
import { ForgotpasswordUserComponent } from './DASHBOARD/forgotpassword-user/forgotpassword-user.component';
import { ProductlistN } from './DASHBOARD/productlist-n.oofproducts/productlist-n.oofproducts.component';


@NgModule({
  declarations: [
    CouponsComponent,
    PaymentsComponent,
    ViewUserComponent,
    TrackerComponent,
    HeaderComponent,
    FooterComponent,
    SidenavBarComponent,
    ReturnorderComponent,
    ForgotpasswordUserComponent,
    ProductlistN.OofproductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
