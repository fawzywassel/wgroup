import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WPropertyRoutingModule } from './w-property-routing.module';
import { WPropertyComponent } from './w-property.component';
import { WPropertySharedModule } from './components/w-property-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WPropertyComponent
  ],
  imports: [
    CommonModule,
    WPropertyRoutingModule,
    WPropertySharedModule,
    GlobalSharedModule,
    WPropertySharedModule,
  ]
})
export class WPropertyModule { }
