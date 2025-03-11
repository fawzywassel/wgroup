import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WGroupAboutUsComponent } from './w-group-about-us.component';

const routes: Routes = [
  {
    path: '',
    component: WGroupAboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WGroupAboutUsRoutingModule { }
