import { Component } from '@angular/core';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-group-header',
  templateUrl: './w-group-header.component.html',
  styleUrls: ['./w-group-header.component.scss'],
})
export class WGroupHeaderComponent {
  TEXT = ['نستلهم من الماضي', 'لنرسم المستقبل', ''];

  images = IMAGES.slider.map((item: any, i: number) => {
    return {
      itemImageSrc: item,
      alt: 'image',
      text: this.TEXT[i],
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
}
