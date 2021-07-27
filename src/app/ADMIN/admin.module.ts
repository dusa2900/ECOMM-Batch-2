import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CouponsComponent } from './DASHBOARD/coupons/coupons.component';
import { PaymentsComponent } from './DASHBOARD/payments/payments.component';
import { ViewUserComponent } from './DASHBOARD/view-user/view-user.component';
import { TrackerComponent } from './DASHBOARD/tracker/tracker.component';
import { HeaderComponent } from './COMMON/header/header.component';
import { FooterComponent } from './COMMON/footer/footer.component';


@NgModule({
  declarations: [
    CouponsComponent,
    PaymentsComponent,
    ViewUserComponent,
    TrackerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
