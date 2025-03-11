import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WArchitectContactUsRoutingModule } from './w-architect-contact-us-routing.module';
import { WArchitectContactUsComponent } from './w-architect-contact-us.component';
import { WArchitectSharedModule } from '../../components/w-architect-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WArchitectContactUsComponent
  ],
  imports: [
    CommonModule,
    WArchitectContactUsRoutingModule,
    WArchitectSharedModule,
    GlobalSharedModule,
  ]
})
export class WArchitectContactUsModule { }
