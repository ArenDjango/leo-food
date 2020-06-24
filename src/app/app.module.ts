import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { Register2Component } from './Pages/register2/register2.component';
import { EnterphonenumberComponent } from './Pages/enterphonenumber/enterphonenumber.component';
import { SetpersonaldataComponent } from './Pages/setpersonaldata/setpersonaldata.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { AdressComponent } from './Pages/adress/adress.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { TabbottomComponent } from './Partials/tabbottom/tabbottom.component';
import { AllkitchenComponent } from './Pages/allkitchen/allkitchen.component';
import { SingleComponent } from './Pages/single/single.component';
import { MenuComponent } from './Partials/menu/menu.component';
import { SinglemenuComponent } from './Pages/singlemenu/singlemenu.component';
import { SinglesalesComponent } from './Pages/singlesales/singlesales.component';
import { SinglereviewsComponent } from './Pages/singlereviews/singlereviews.component';
import { SinglewritereviewComponent } from './Pages/singlewritereview/singlewritereview.component';
import { SinglesaleComponent } from './Pages/singlesale/singlesale.component';
import { AllplacesComponent } from './Pages/allplaces/allplaces.component';
import { OrderComponent } from './Pages/order/order.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { MyprofileComponent } from './Pages/myprofile/myprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    Register2Component,
    EnterphonenumberComponent,
    SetpersonaldataComponent,
    AdressComponent,
    DashboardComponent,
    TabbottomComponent,
    AllkitchenComponent,
    SingleComponent,
    MenuComponent,
    SinglemenuComponent,
    SinglesalesComponent,
    SinglereviewsComponent,
    SinglewritereviewComponent,
    SinglesaleComponent,
    AllplacesComponent,
    OrderComponent,
    OrdersComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
