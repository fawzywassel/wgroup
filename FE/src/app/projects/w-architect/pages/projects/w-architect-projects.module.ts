import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WArchitectProjectsRoutingModule } from './w-architect-projects-routing.module';
import { WArchitectProjectsComponent } from './w-architect-projects.component';
import { WArchitectSharedModule } from '../../components/w-architect-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WArchitectProjectsComponent
  ],
  imports: [
    CommonModule,
    WArchitectProjectsRoutingModule,
    WArchitectSharedModule,
    GlobalSharedModule,
  ]
})
export class WArchitectProjectsModule { }
