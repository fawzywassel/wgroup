import { Component } from '@angular/core';
import { WArchitectProjectsList } from '../../constants/projects.constant';
import { ActivatedRoute } from '@angular/router';
import { IWArchitectProject } from '../../interfaces/projects.interface';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-architect-projects',
  templateUrl: './w-architect-projects.component.html',
  styleUrls: ['./w-architect-projects.component.scss'],
})
export class WArchitectProjectsComponent {
  image = IMAGES.pagesHeaders.wProperty.contactUs;
  titles: any = {
    res: 'المشاريع السكنية',
    com: 'المشاريع التجارية',
    admin: 'المشاريع المكتبية ',
  };
  subtitle = '';

  projects: IWArchitectProject[] = [];

  constructor(private activeRoute: ActivatedRoute) {
    if (this.id) {
      this.projects = WArchitectProjectsList?.filter(
        (project: IWArchitectProject) => {
          return project.category === this.id;
        }
      );
    }
  }

  get id() {
    return this.activeRoute.snapshot.params?.['id'] || '';
  }
}
