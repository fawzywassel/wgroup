import { Component } from '@angular/core';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-architect-header',
  templateUrl: './w-architect-header.component.html',
  styleUrls: ['./w-architect-header.component.scss'],
})
export class WArchitectHeaderComponent {
  wImage = IMAGES.coloredLogos.wArchitect;
}
