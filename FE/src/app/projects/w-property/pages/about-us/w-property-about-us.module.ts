import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WPropertyAboutUsRoutingModule } from './w-property-about-us-routing.module';
import { WPropertyAboutUsComponent } from './w-property-about-us.component';
import { WPropertySharedModule } from '../../components/w-property-shared.module';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';

@NgModule({
  declarations: [WPropertyAboutUsComponent],
  imports: [
    CommonModule,
    WPropertyAboutUsRoutingModule,
    WPropertySharedModule,
    GlobalSharedModule,
  ],
})
export class WPropertyAboutUsModule {}
