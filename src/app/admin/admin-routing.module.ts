import { NgModule } from '@angular/core';
import {AdminComponent} from "./admin.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

const adminRoutes: Routes = [
  {path: ':id', component: AdminComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
