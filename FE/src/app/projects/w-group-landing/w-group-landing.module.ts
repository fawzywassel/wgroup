import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WGroupLandingRoutingModule } from './w-group-landing-routing.module';
import { WGroupLandingComponent } from './w-group-landing.component';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';
import { WGroupSharedModule } from './components/w-group-shared.module';


@NgModule({
  declarations: [
    WGroupLandingComponent
  ],
  imports: [
    CommonModule,
    WGroupLandingRoutingModule,
    GlobalSharedModule,
    WGroupSharedModule,
  ]
})
export class WGroupLandingModule { }
