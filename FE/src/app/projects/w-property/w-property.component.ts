import { Component } from '@angular/core';
import { WPropertyFooterDetails } from './constants/footer-details.constant';

@Component({
  selector: 'app-w-property',
  templateUrl: './w-property.component.html',
  styleUrls: ['./w-property.component.scss']
})
export class WPropertyComponent {

  footerDetails = WPropertyFooterDetails
}
