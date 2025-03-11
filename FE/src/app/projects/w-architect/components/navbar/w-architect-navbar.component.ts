import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';

@Component({
  selector: 'app-w-architect-navbar',
  templateUrl: './w-architect-navbar.component.html',
  styleUrls: ['./w-architect-navbar.component.scss'],
})
export class WArchitectNavbarComponent {
  images = IMAGES;
  routes = W_ROUTES;
  sidebarVisible = false;

  constructor(private route: Router) {}

  public routeToPage(route: string) {
    this.route.navigateByUrl(route);
    setTimeout(() => {
      this.sidebarVisible = false;
    }, 500);
  }

  public openSidebar() {
    this.sidebarVisible = true;
  }
}
