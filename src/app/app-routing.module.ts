import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlacesComponent } from './admin/add-places/add-places.component';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { ListPlacesComponent } from './admin/list-places/list-places.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { HomeComponent } from './customer/home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PlacesComponent } from './places/places.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"places",component:PlacesComponent},
  {path:"admin/dashboard",component:DashboardComponent},
  {path:"customer/home",component:HomeComponent},
  {path:"forgetPassword",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"admin/listusers",component:ListusersComponent},
  {path:"logout",component:LogoutComponent},
  {path:"admin/adduser",component:AdduserComponent},
  {path:"admin/listplaces",component:ListPlacesComponent},
  {path:"admin/addplaces",component:AddPlacesComponent},
  {path:"admin/edituser/:userid",component:EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
