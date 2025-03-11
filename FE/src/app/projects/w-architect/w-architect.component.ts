import { Component } from '@angular/core';
import { WArchitectFooterDetails } from './constants/footer-details.constant';

@Component({
  selector: 'app-w-architect',
  templateUrl: './w-architect.component.html',
  styleUrls: ['./w-architect.component.scss']
})
export class WArchitectComponent {

  footerDetails = WArchitectFooterDetails

}
