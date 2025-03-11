import { Component, Input } from '@angular/core';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-property-feedback-card',
  templateUrl: './w-property-feedback-card.component.html',
  styleUrls: ['./w-property-feedback-card.component.scss']
})

export class WPropertyFeedbackCardComponent {
  @Input() url!: string
}
