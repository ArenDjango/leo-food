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
import {SingleComponent} from './Pages/single/single.component';
import {SinglemenuComponent} from './Pages/singlemenu/singlemenu.component';
import {SinglesalesComponent} from './Pages/singlesales/singlesales.component';
import {SinglereviewsComponent} from './Pages/singlereviews/singlereviews.component';
import {SinglewritereviewComponent} from './Pages/singlewritereview/singlewritereview.component';
import {SinglesaleComponent} from './Pages/singlesale/singlesale.component';
import {AllplacesComponent} from './Pages/allplaces/allplaces.component';
import {OrderComponent} from './Pages/order/order.component';
import {OrdersComponent} from './Pages/orders/orders.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  // Register and fill personal data
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'enter-phone-number', component: EnterphonenumberComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register-part-2', component: Register2Component},
  { path: 'set-personal-data', component: SetpersonaldataComponent},
  { path: 'adress', component: AdressComponent},

  // Dashboard
  { path: 'dashboard', component: DashboardComponent},
  { path: 'all-kitchen', component: AllkitchenComponent},
  { path: 'all-places', component: AllplacesComponent},
  { path: 'order', component: OrderComponent},
  { path: 'my-orders', component: OrdersComponent},

  // Restourant single
  { path: 'single', component: SingleComponent},
  { path: 'single/menu', component: SinglemenuComponent},
  { path: 'single/sales', component: SinglesalesComponent},
  { path: 'single/sale', component: SinglesaleComponent},
  { path: 'single/reviews', component: SinglereviewsComponent},
  { path: 'single/reviews/write', component: SinglewritereviewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
