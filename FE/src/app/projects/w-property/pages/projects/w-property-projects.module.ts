import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WPropertyProjectsRoutingModule } from './w-property-projects-routing.module';
import { WPropertyProjectsComponent } from './w-property-projects.component';
import { WPropertySharedModule } from '../../components/w-property-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WPropertyProjectsComponent
  ],
  imports: [
    CommonModule,
    WPropertyProjectsRoutingModule,
    WPropertySharedModule,
    GlobalSharedModule,
  ]
})
export class WPropertyProjectsModule { }
