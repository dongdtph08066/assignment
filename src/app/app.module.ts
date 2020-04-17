import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSeComponent } from './product-se/product-se.component';
import { HomeComponent } from './home/home.component';
import { FoterComponent } from './foter/foter.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule , HttpClientModule  ],
  declarations: [ AppComponent, HelloComponent, BannerComponent, Banner2Component, ProductListComponent, ProductSeComponent, HomeComponent, FoterComponent ],
  bootstrap:    [ AppComponent ],

  


})
export class AppModule { }
