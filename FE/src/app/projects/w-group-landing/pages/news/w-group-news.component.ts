import { Component } from '@angular/core';
import { WGroupNewsList } from '../../constants/news.constant';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-group-news',
  templateUrl: './w-group-news.component.html',
  styleUrls: ['./w-group-news.component.scss']
})
export class WGroupNewsComponent {

  image = IMAGES.pagesHeaders.wGroup.news
  title = "المركز الاعلامي";
  subtitle = "تعرف الآن على آخر الأخبار"

  news = WGroupNewsList
}
