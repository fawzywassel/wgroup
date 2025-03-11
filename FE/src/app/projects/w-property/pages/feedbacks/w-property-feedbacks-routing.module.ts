import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WPropertyFeedbacksComponent } from './w-property-feedbacks.component';

const routes: Routes = [
  {
    path: '',
    component: WPropertyFeedbacksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WPropertyFeedbacksRoutingModule { }
