import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserProfileComponent} from "./user-profile.component";
import {CommonModule} from "@angular/common";

const userRoutes: Routes = [
  {path: ':id', component: UserProfileComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }

