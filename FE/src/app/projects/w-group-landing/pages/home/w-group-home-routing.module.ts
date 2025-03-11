import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WGroupHomeComponent } from './w-group-home.component';

const routes: Routes = [
  {
    path: '',
    component: WGroupHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WGroupHomeRoutingModule { }
