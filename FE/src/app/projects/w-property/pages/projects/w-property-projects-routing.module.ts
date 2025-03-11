import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WPropertyProjectsComponent } from './w-property-projects.component';

const routes: Routes = [
  {
    path: '',
    component: WPropertyProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WPropertyProjectsRoutingModule { }
