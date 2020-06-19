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
    AllkitchenComponent
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
