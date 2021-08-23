import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AngmaterialModule} from './ANGMATERIAL/angmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AuthGuard } from './Auth/auth.guard';
import { EcommService } from './SERVICES/ecomm.service';
import { JwtheaderComponent } from './Http-JWT-Get-req/jwtheader/jwtheader.component';
@NgModule({
  declarations: [
    AppComponent,
    JwtheaderComponent
  ],
  imports: [
    BrowserModule,ToastrModule.forRoot(),NgxPaginationModule,
    AppRoutingModule,HttpClientModule,AngmaterialModule, BrowserAnimationsModule
  ],
  providers: [AuthGuard,EcommService],
  bootstrap: [AppComponent]
})
export class AppModule { }
