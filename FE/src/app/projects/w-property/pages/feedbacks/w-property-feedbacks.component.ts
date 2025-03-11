import { Component } from '@angular/core';
import { WPropertyFeedbacksList } from '../../constants/feedbacks.constant';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-property-feedbacks',
  templateUrl: './w-property-feedbacks.component.html',
  styleUrls: ['./w-property-feedbacks.component.scss'],
})
export class WPropertyFeedbacksComponent {
  image = IMAGES.pagesHeaders.wProperty.contactUs;
  title = 'تقيمات العملاء';
  subtitle = 'تقيمات العملاء';

  feedbacks = WPropertyFeedbacksList;
}
