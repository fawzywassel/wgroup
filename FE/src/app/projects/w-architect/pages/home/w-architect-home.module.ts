import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WArchitectHomeRoutingModule } from './w-architect-home-routing.module';
import { WArchitectHomeComponent } from './w-architect-home.component';
import { WArchitectSharedModule } from '../../components/w-architect-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';
import { GalleriaModule } from 'primeng/galleria';


@NgModule({
  declarations: [
    WArchitectHomeComponent
  ],
  imports: [
    CommonModule,
    WArchitectHomeRoutingModule,
    WArchitectSharedModule,
    GlobalSharedModule,
    GalleriaModule,
  ]
})
export class WArchitectHomeModule { }
