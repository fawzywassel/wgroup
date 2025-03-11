import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WArchitectContactUsComponent } from './w-architect-contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: WArchitectContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WArchitectContactUsRoutingModule { }
