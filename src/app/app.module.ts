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
import { HomeComponent } from './customer/home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { ContentComponent } from './admin/content/content.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { LogoutComponent } from './logout/logout.component';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { DataTablesModule } from 'angular-datatables';
import { ListPlacesComponent } from './admin/list-places/list-places.component';
import { AddPlacesComponent } from './admin/add-places/add-places.component';
import { EdituserComponent } from './admin/edituser/edituser.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PlacesComponent,
    DashboardComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    ListusersComponent,
    LogoutComponent,
    AdduserComponent,
    ListPlacesComponent,
    AddPlacesComponent,
   ListPlacesComponent,
   EdituserComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
