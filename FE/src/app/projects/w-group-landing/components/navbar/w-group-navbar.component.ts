import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';

@Component({
  selector: 'app-w-group-navbar',
  templateUrl: './w-group-navbar.component.html',
  styleUrls: ['./w-group-navbar.component.scss']
})
export class WGroupNavbarComponent {

  images = IMAGES;
  routes = W_ROUTES;

  constructor(private route: Router) { }

  public routeToPage(route: string) {
    this.route.navigateByUrl(route)
  }
}
