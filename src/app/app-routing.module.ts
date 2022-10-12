import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './customer/home/home.component';
import { LoginComponent } from './login/login.component';
import { PlacesComponent } from './places/places.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"places",component:PlacesComponent},
  {path:"admin/dashboard",component:DashboardComponent},
  {path:"customer/home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
