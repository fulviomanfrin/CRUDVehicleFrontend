import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';


const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "crud",
    component: CrudFormComponent
  },
  {
    path: "list",
    component: VehicleListComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
