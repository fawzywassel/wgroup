import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WPropertySubmitRequestComponent } from './w-property-submit-request.component';

const routes: Routes = [
  {
    path: '',
    component: WPropertySubmitRequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WPropertySubmitRequestRoutingModule {}
