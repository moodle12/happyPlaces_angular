import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlacesComponent } from './places/places.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './customer/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PlacesComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
