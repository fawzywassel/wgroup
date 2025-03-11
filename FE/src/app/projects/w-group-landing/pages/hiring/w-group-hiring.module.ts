import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WGroupHiringRoutingModule } from './w-group-hiring-routing.module';
import { WGroupHiringComponent } from './w-group-hiring.component';
import { WGroupSharedModule } from '../../components/w-group-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';


@NgModule({
  declarations: [
    WGroupHiringComponent
  ],
  imports: [
    CommonModule,
    WGroupHiringRoutingModule,
    WGroupSharedModule,
    GlobalSharedModule,
    TableModule,
    TabViewModule,
    ProgressBarModule,
  ]
})
export class WGroupHiringModule { }
