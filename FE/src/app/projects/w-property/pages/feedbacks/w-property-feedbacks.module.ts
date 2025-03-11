import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WPropertyFeedbacksRoutingModule } from './w-property-feedbacks-routing.module';
import { WPropertyFeedbacksComponent } from './w-property-feedbacks.component';
import { WPropertySharedModule } from '../../components/w-property-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


@NgModule({
  declarations: [
    WPropertyFeedbacksComponent
  ],
  imports: [
    CommonModule,
    WPropertyFeedbacksRoutingModule,
    WPropertySharedModule,
    GlobalSharedModule,
  ]
})
export class WPropertyFeedbacksModule { }
