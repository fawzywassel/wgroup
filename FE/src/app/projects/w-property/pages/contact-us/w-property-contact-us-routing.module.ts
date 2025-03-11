import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WPropertyContactUsComponent } from './w-property-contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: WPropertyContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WPropertyContactUsRoutingModule { }
