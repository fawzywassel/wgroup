import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WRealEstateRoutingModule } from './w-real-estate-routing.module';
import { WRealEstateComponent } from './w-real-estate.component';


@NgModule({
  declarations: [
    WRealEstateComponent
  ],
  imports: [
    CommonModule,
    WRealEstateRoutingModule
  ]
})
export class WRealEstateModule { }
