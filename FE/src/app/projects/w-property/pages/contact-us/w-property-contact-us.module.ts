import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WPropertyContactUsRoutingModule } from './w-property-contact-us-routing.module';
import { WPropertyContactUsComponent } from './w-property-contact-us.component';
import { WPropertySharedModule } from '../../components/w-property-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WPropertyContactUsComponent
  ],
  imports: [
    CommonModule,
    WPropertyContactUsRoutingModule,
    WPropertySharedModule,
    GlobalSharedModule,
  ]
})
export class WPropertyContactUsModule { }
