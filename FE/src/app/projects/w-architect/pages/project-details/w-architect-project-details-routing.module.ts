import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WArchitectProjectDetailsComponent } from './w-architect-project-details.component';

const routes: Routes = [
  {
    path: '',
    component: WArchitectProjectDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WArchitectProjectDetailsRoutingModule { }
