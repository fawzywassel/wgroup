import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WGroupHomeRoutingModule } from './w-group-home-routing.module';
import { WGroupHomeComponent } from './w-group-home.component';
import { WGroupSharedModule } from '../../components/w-group-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WGroupHomeComponent
  ],
  imports: [
    CommonModule,
    WGroupHomeRoutingModule,
    WGroupSharedModule,
    GlobalSharedModule,
  ]
})
export class WGroupHomeModule { }
