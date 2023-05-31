import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { TestComponent } from '@components/test/test.component';
import { ListreposComponent } from '@components/dashboard/listrepos/listrepos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposComponent } from './components/dashboard/listrepos/repos/repos.component';

@NgModule({
  declarations: [AppComponent, TestComponent, DashboardComponent, ListreposComponent, ReposComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
