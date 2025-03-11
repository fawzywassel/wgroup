import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WPropertyFeedbacksList } from '../../constants/feedbacks.constant';
import { WPropertyProjectsList } from '../../constants/projects.constant';
import { WPropertyPartnersList } from '../../constants/partners.constant';

@Component({
  selector: 'app-w-property-home',
  templateUrl: './w-property-home.component.html',
  styleUrls: ['./w-property-home.component.scss'],
})
export class WPropertyHomeComponent {
  feedbacks = WPropertyFeedbacksList;
  partners = WPropertyPartnersList;
  projects = WPropertyProjectsList;

  constructor(private route: Router) {}

  public routeToPage(route: string) {
    this.route.navigateByUrl(route);
  }
}
