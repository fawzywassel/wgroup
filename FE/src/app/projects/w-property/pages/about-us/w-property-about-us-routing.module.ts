import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WPropertyAboutUsComponent } from './w-property-about-us.component';

const routes: Routes = [
  {
    path: '',
    component: WPropertyAboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WPropertyAboutUsRoutingModule { }
