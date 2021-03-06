import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from 'src/app/app-routing.module';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    VehiclesComponent,
    CrudFormComponent,
    VehicleListComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
