import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WArchitectRoutingModule } from './w-architect-routing.module';
import { WArchitectComponent } from './w-architect.component';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';
import { WArchitectSharedModule } from './components/w-architect-shared.module';


@NgModule({
  declarations: [
    WArchitectComponent
  ],
  imports: [
    CommonModule,
    WArchitectRoutingModule,
    GlobalSharedModule,
    WArchitectSharedModule,
  ]
})
export class WArchitectModule { }
