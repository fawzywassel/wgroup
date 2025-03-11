import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';

@Component({
  selector: 'app-w-property-navbar',
  templateUrl: './w-property-navbar.component.html',
  styleUrls: ['./w-property-navbar.component.scss']
})
export class WPropertyNavbarComponent {

  images = IMAGES;
  routes = W_ROUTES;

  constructor(private route: Router) { }

  public routeToPage(route: string) {
    this.route.navigateByUrl(route)
  }
}
