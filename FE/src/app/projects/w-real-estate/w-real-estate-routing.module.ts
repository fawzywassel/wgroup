import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WRealEstateComponent } from './w-real-estate.component';

const routes: Routes = [
  {
    path: '',
    component: WRealEstateComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WRealEstateRoutingModule { }
