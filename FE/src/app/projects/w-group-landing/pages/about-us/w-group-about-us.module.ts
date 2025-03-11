import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WGroupAboutUsRoutingModule } from './w-group-about-us-routing.module';
import { WGroupAboutUsComponent } from './w-group-about-us.component';
import { WGroupSharedModule } from '../../components/w-group-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WGroupAboutUsComponent
  ],
  imports: [
    CommonModule,
    WGroupAboutUsRoutingModule,
    WGroupSharedModule,
    GlobalSharedModule,
  ]
})
export class WGroupAboutUsModule { }
