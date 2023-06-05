import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { TestComponent } from '@components/test/test.component';
import { ListreposComponent } from '@components/dashboard/listrepos/listrepos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposComponent } from './components/dashboard/listrepos/repos/repos.component';
import { NgChartsModule } from 'ng2-charts';
import { Kpi1Component } from './components/dashboard/kpi1/kpi1.component';

@NgModule({
  declarations: [AppComponent, TestComponent, DashboardComponent, ListreposComponent, ReposComponent, Kpi1Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
