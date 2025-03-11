import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';
import { WGroupLandingComponent } from './w-group-landing.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: W_ROUTES.HOME,
  },
  {
    path: '',
    component: WGroupLandingComponent,
    children: [
      {
        path: W_ROUTES.HOME,
        loadChildren: () => import('./pages/home/w-group-home.module').then(m => m.WGroupHomeModule)
      },
      {
        path: W_ROUTES.CONTACT_US,
        loadChildren: () => import('./pages/contact-us/w-group-contact-us.module').then(m => m.WGroupContactUsModule)
      },
      {
        path: W_ROUTES.ABOUT_US,
        loadChildren: () => import('./pages/about-us/w-group-about-us.module').then(m => m.WGroupAboutUsModule)
      },
      {
        path: W_ROUTES.NEWS,
        loadChildren: () => import('./pages/news/w-group-news.module').then(m => m.WGroupNewsModule)
      },

      {
        path: W_ROUTES.HIRING,
        loadChildren: () => import('./pages/hiring/w-group-hiring.module').then(m => m.WGroupHiringModule)
      },

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WGroupLandingRoutingModule { }
