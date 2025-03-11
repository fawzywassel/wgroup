import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WArchitectProjectsList } from '../../constants/projects.constant';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';
import { IWArchitectProject } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-w-architect-home',
  templateUrl: './w-architect-home.component.html',
  styleUrls: ['./w-architect-home.component.scss'],
})
export class WArchitectHomeComponent {
  projects = WArchitectProjectsList;

  images = WArchitectProjectsList.map((item: IWArchitectProject) => {
    return {
      itemImageSrc: item?.mainImage?.replace('main', 'slider'),
      label: item.name,
      id: item.id,
      alt: 'image',
    };
  });

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  categories = [
    {
      id: 'res',
      name: 'سكني',
      nameEn: 'Residential',
      image: IMAGES.projectCategories + 'res.jpg',
    },

    {
      id: 'admin',
      name: 'مكتبي',
      nameEn: 'Administration',
      image: IMAGES.projectCategories + 'admin.jpg',
    },
    {
      id: 'com',
      name: 'تجاري',
      nameEn: 'Commercial',
      image: IMAGES.projectCategories + 'com.jpg',
    },
  ];

  constructor(private router: Router) {}

  public routeToPage(route: string) {
    this.router.navigateByUrl(route);
  }

  public navigateToCategory(id: string) {
    this.router.navigateByUrl(
      `${W_ROUTES.W_ARCHITECT}/${W_ROUTES.PROJECTS}/${id}`
    );
  }

  public navigateToProject(id: string) {
    this.router.navigateByUrl(
      `${W_ROUTES.W_ARCHITECT}/${W_ROUTES.DETAILS}/${id}`
    );
  }
}
