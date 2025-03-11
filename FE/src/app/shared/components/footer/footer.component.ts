import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IFooterDetails } from '../../interfaces/footer-details.interface';
import { IMAGES } from '../../constants/image-paths.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() data!: IFooterDetails;
  wImage = IMAGES.coloredLogos.justW;

  constructor(private route: Router) {}

  public routeToPage(route: string) {
    this.route.navigateByUrl(route);
  }

  public onClickSocialIcon(link: string) {
    if (link.includes('@gmail.com')) {
      // window.open("mailto:" + link + '?cc=' + emailCC + '&subject=' + emailSub + '&body=' + emailBody);
      window.open(`mailto: ${link}`, '_blank');
    } else {
      if (link === '' || link === '/login') {
        this.routeToPage(link);
      } else {
        window.open(link, '_blank');
      }
    }
  }
}
