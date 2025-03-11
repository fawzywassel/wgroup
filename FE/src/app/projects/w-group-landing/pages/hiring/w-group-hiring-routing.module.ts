import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WGroupHiringComponent } from './w-group-hiring.component';

const routes: Routes = [
  {
    path: '',
    component: WGroupHiringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WGroupHiringRoutingModule { }
