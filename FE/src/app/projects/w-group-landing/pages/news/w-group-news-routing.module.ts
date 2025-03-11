import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WGroupNewsComponent } from './w-group-news.component';

const routes: Routes = [
  {
    path: '',
    component: WGroupNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WGroupNewsRoutingModule { }
