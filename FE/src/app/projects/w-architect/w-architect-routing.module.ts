import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';
import { WArchitectComponent } from './w-architect.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: W_ROUTES.HOME,
  },
  {
    path: '',
    component: WArchitectComponent,
    children: [
      {
        path: W_ROUTES.HOME,
        loadChildren: () =>
          import('./pages/home/w-architect-home.module').then(
            (m) => m.WArchitectHomeModule
          ),
      },
      {
        path: W_ROUTES.CONTACT_US,
        loadChildren: () =>
          import('./pages/contact-us/w-architect-contact-us.module').then(
            (m) => m.WArchitectContactUsModule
          ),
      },
      {
        path: W_ROUTES.PROJECTS + '/:id',
        loadChildren: () =>
          import('./pages/projects/w-architect-projects.module').then(
            (m) => m.WArchitectProjectsModule
          ),
      },
      {
        path: W_ROUTES.DETAILS + '/:id',
        loadChildren: () =>
          import(
            './pages/project-details/w-architect-project-details.module'
          ).then((m) => m.WArchitectProjectDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WArchitectRoutingModule {}
