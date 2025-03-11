import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WPropertySubmitRequestRoutingModule } from './w-property-submit-request-routing.module';
import { WPropertySubmitRequestComponent } from './w-property-submit-request.component';
import { WPropertySharedModule } from '../../components/w-property-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';

@NgModule({
  declarations: [WPropertySubmitRequestComponent],
  imports: [
    CommonModule,
    WPropertySubmitRequestRoutingModule,
    WPropertySharedModule,
    GlobalSharedModule,
  ],
})
export class WPropertySubmitRequestModule {}
