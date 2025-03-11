import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WGroupContactUsComponent } from './w-group-contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: WGroupContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WGroupContactUsRoutingModule { }
