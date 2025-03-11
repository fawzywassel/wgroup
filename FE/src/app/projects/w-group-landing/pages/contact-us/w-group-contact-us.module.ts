import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WGroupContactUsRoutingModule } from './w-group-contact-us-routing.module';
import { WGroupContactUsComponent } from './w-group-contact-us.component';
import { WGroupSharedModule } from '../../components/w-group-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WGroupContactUsComponent
  ],
  imports: [
    CommonModule,
    WGroupContactUsRoutingModule,
    WGroupSharedModule,
    GlobalSharedModule,
  ]
})
export class WGroupContactUsModule { }
