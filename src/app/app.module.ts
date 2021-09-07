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
// import { BredcrumbComponent } from './BREDCRUMB/bredcrumb/bredcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    JwtheaderComponent,
    ForbiddenComponent,
    PagenotfoundComponent,
    // BredcrumbComponent,
  ],
  imports: [
    BrowserModule,ToastrModule.forRoot(),NgxPaginationModule,
    AppRoutingModule,HttpClientModule,AngmaterialModule, BrowserAnimationsModule, NgbModule
  ],
  providers: [AuthGuard,EcommService,  UserGuard,LoginAuthService, {provide: HTTP_INTERCEPTORS, useClass: JwtheaderComponent, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
