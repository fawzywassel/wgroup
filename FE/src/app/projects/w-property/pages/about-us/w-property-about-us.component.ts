import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';
import { WPropertyPercentageList } from '../../constants/percentage.constant';

@Component({
  selector: 'app-w-property-about-us',
  templateUrl: './w-property-about-us.component.html',
  styleUrls: ['./w-property-about-us.component.scss'],
})
export class WPropertyAboutUsComponent {
  image = IMAGES.pagesHeaders.wProperty.aboutUs;
  aboutImage = IMAGES.pagesHeaders.wProperty.aboutUsSec;
  title = 'من نحن';
  subtitle = 'تعرف علينا اكثر الآن';
  percentage = WPropertyPercentageList;

  constructor(private router: Router) {}

  goToRequest() {
    this.router.navigateByUrl(
      W_ROUTES.W_PROPERTY + '/' + W_ROUTES.SUBMIT_REQUEST
    );
  }
}
