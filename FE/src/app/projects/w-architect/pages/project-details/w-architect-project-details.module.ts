import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WArchitectProjectDetailsRoutingModule } from './w-architect-project-details-routing.module';
import { WArchitectProjectDetailsComponent } from './w-architect-project-details.component';
import { WArchitectSharedModule } from '../../components/w-architect-shared.module';
import { ChunkPipe } from 'src/app/shared/pipe/chunk.pipe';
import { DialogModule } from 'primeng/dialog';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';

@NgModule({
  declarations: [
    WArchitectProjectDetailsComponent,
    ChunkPipe,
  ],
  imports: [
    CommonModule,
    WArchitectProjectDetailsRoutingModule,
    WArchitectSharedModule,
    DialogModule,
    GlobalSharedModule,
  ]
})
export class WArchitectProjectDetailsModule { }
