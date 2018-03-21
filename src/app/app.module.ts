import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Component2Component } from './cpn/component2/component2.component';
import { ServiceService } from './service/service.service';
import { Component1Module } from './cpn/component1/component1.module';


@NgModule({
  declarations: [
    AppComponent,
    Component2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Component1Module
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
