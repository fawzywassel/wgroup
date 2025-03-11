import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { W_ROUTES } from './shared/constants/routes.constant';


const routes: Routes = [
  {
    path: W_ROUTES.W_GROUP,
    loadChildren: () => import('./projects/w-group-landing/w-group-landing.module').then(m => m.WGroupLandingModule)
  },
  {
    path: W_ROUTES.W_ARCHITECT,
    loadChildren: () => import('./projects/w-architect/w-architect.module').then(m => m.WArchitectModule)
  },
  {
    path: W_ROUTES.W_PROPERTY,
    loadChildren: () => import('./projects/w-property/w-property.module').then(m => m.WPropertyModule)
  },
  {
    path: W_ROUTES.W_REAL_ESTATE,
    loadChildren: () => import('./projects/w-real-estate/w-real-estate.module').then(m => m.WRealEstateModule)
  },
  {
    path: W_ROUTES.DASHBOARD,
    loadChildren: () => import('./projects/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: W_ROUTES.LOGIN,
    loadChildren: () => import('./projects/login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
