import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WPropertyHomeRoutingModule } from './w-property-home-routing.module';
import { WPropertyHomeComponent } from './w-property-home.component';
import { WPropertySharedModule } from '../../components/w-property-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WPropertyHomeComponent
  ],
  imports: [
    CommonModule,
    WPropertyHomeRoutingModule,
    WPropertySharedModule,
    GlobalSharedModule,
  ]
})
export class WPropertyHomeModule { }
