import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WPropertyHomeComponent } from './w-property-home.component';

const routes: Routes = [
  {
    path: '',
    component: WPropertyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WPropertyHomeRoutingModule { }
