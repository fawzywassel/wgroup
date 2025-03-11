import { Component } from '@angular/core';
import { WPropertyProjectsList } from '../../constants/projects.constant';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-property-projects',
  templateUrl: './w-property-projects.component.html',
  styleUrls: ['./w-property-projects.component.scss'],
})
export class WPropertyProjectsComponent {
  image = IMAGES.pagesHeaders.wProperty.projects;
  title = 'المشاريع';
  subtitle = 'مشاريعنا';

  projects = WPropertyProjectsList;
}
