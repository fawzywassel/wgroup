import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WArchitectHomeComponent } from './w-architect-home.component';

const routes: Routes = [
  {
    path: '',
    component: WArchitectHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WArchitectHomeRoutingModule { }
