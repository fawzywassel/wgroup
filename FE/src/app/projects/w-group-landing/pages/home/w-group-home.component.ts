import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WGroupBrandsList } from '../../constants/brands.constant';
import { WGroupStatisticsList } from '../../constants/statistics.constant';
import { WGroupNewsList } from '../../constants/news.constant';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { IWGroupNews } from '../../interfaces/news.interface';

@Component({
  selector: 'app-w-group-home',
  templateUrl: './w-group-home.component.html',
  styleUrls: ['./w-group-home.component.scss'],
})
export class WGroupHomeComponent {
  images = IMAGES;
  statistics = WGroupStatisticsList;
  brands = WGroupBrandsList;

  uniqueStatuses = [];
  seenStatuses = new Set();

  news: IWGroupNews[] = WGroupNewsList.filter((item) => {
    if (!this.seenStatuses.has(item.categoryId)) {
      this.seenStatuses.add(item.categoryId);
      return true;
    }
    return false;
  });

  constructor(private route: Router) {}

  public routeToPage(route: string) {
    this.route.navigateByUrl(route);
  }
}
