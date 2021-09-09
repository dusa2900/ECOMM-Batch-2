import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AngmaterialModule} from './ANGMATERIAL/angmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AuthGuard } from './Auth/auth.guard';
import { EcommService } from './SERVICES/ecomm.service';
import { JwtheaderComponent } from './Http-JWT-Get-req/jwtheader/jwtheader.component';
import { ForbiddenComponent } from './unauth-forbidden/forbidden/forbidden.component';
import { UserGuard } from './Auth/user.guard';
import { LoginAuthService } from './SERVICES/login.auth.service';
import { PagenotfoundComponent } from './unauth-forbidden/pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {​​​​​​ MatProgressSpinnerModule }​​​​​​ from'@angular/material/progress-spinner';
import {​​​​​​ InterceptorService }​​​​​​ from'./SERVICES/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    JwtheaderComponent,
    ForbiddenComponent,
    PagenotfoundComponent,
    // BredcrumbComponent,
  ],
  imports: [
    BrowserModule,ToastrModule.forRoot(),NgxPaginationModule,MatProgressSpinnerModule,
    AppRoutingModule,HttpClientModule,AngmaterialModule, BrowserAnimationsModule, NgbModule
  ],
  providers: [AuthGuard,EcommService, UserGuard,LoginAuthService, {provide: HTTP_INTERCEPTORS, useClass: JwtheaderComponent, multi: true},{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
