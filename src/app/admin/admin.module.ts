import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxSmartModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
