import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ToastrModule.forRoot(),
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
