import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WArchitectProjectsComponent } from './w-architect-projects.component';

const routes: Routes = [
  {
    path: '',
    component: WArchitectProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WArchitectProjectsRoutingModule { }
