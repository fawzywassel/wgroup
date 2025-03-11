import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TreeTableModule } from 'primeng/treetable';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TreeTableModule,
    ToastModule
  ]
})
export class DashboardModule { }
