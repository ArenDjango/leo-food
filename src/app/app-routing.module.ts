import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {LoginComponent} from './Pages/login/login.component';
import {RegisterComponent} from './Pages/register/register.component';
import {Register2Component} from './Pages/register2/register2.component';
import {EnterphonenumberComponent} from './Pages/enterphonenumber/enterphonenumber.component';
import {SetpersonaldataComponent} from './Pages/setpersonaldata/setpersonaldata.component';
import {AdressComponent} from './Pages/adress/adress.component';
import {DashboardComponent} from './Pages/dashboard/dashboard.component';
import {AllkitchenComponent} from './Pages/allkitchen/allkitchen.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'enter-phone-number', component: EnterphonenumberComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register-part-2', component: Register2Component},
  { path: 'set-personal-data', component: SetpersonaldataComponent},
  { path: 'adress', component: AdressComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'all-kitchen', component: AllkitchenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
