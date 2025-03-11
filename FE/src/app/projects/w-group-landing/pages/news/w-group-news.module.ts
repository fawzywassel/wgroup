import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WGroupNewsRoutingModule } from './w-group-news-routing.module';
import { WGroupNewsComponent } from './w-group-news.component';
import { WGroupSharedModule } from '../../components/w-group-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WGroupNewsComponent
  ],
  imports: [
    CommonModule,
    WGroupNewsRoutingModule,
    WGroupSharedModule,
    GlobalSharedModule,
  ]
})
export class WGroupNewsModule { }
