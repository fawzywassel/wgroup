import { Component } from '@angular/core';
import { WGroupFooterDetails } from './constants/footer-details.constant';

@Component({
  selector: 'app-w-group-landing',
  templateUrl: './w-group-landing.component.html',
  styleUrls: ['./w-group-landing.component.scss']
})
export class WGroupLandingComponent {

  footerDetails = WGroupFooterDetails

}
