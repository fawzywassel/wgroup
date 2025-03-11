import { Component } from '@angular/core';
import { WGroupAboutUsList } from '../../constants/about-us.constant';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-group-about-us',
  templateUrl: './w-group-about-us.component.html',
  styleUrls: ['./w-group-about-us.component.scss'],
})
export class WGroupAboutUsComponent {
  image = IMAGES.pagesHeaders.wGroup.aboutUs;
  title = 'من نحن';
  subtitle = 'تعرف علينا اكثر الآن';

  aboutUsList = WGroupAboutUsList;
}
