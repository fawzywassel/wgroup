import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';
import { WPropertyComponent } from './w-property.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: W_ROUTES.HOME,
  },
  {
    path: '',
    component: WPropertyComponent,
    children: [
      {
        path: W_ROUTES.HOME,
        loadChildren: () =>
          import('./pages/home/w-property-home.module').then(
            (m) => m.WPropertyHomeModule
          ),
      },
      {
        path: W_ROUTES.CONTACT_US,
        loadChildren: () =>
          import('./pages/contact-us/w-property-contact-us.module').then(
            (m) => m.WPropertyContactUsModule
          ),
      },
      {
        path: W_ROUTES.ABOUT_US,
        loadChildren: () =>
          import('./pages/about-us/w-property-about-us.module').then(
            (m) => m.WPropertyAboutUsModule
          ),
      },
      {
        path: W_ROUTES.FEEDBACKS,
        loadChildren: () =>
          import('./pages/feedbacks/w-property-feedbacks.module').then(
            (m) => m.WPropertyFeedbacksModule
          ),
      },
      {
        path: W_ROUTES.PROJECTS,
        loadChildren: () =>
          import('./pages/projects/w-property-projects.module').then(
            (m) => m.WPropertyProjectsModule
          ),
      },
      {
        path: W_ROUTES.SUBMIT_REQUEST,
        loadChildren: () =>
          import(
            './pages/submit-request/w-property-submit-request.module'
          ).then((m) => m.WPropertySubmitRequestModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WPropertyRoutingModule {}
