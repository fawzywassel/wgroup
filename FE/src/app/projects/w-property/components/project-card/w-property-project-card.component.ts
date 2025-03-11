import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w-property-project-card',
  templateUrl: './w-property-project-card.component.html',
  styleUrls: ['./w-property-project-card.component.scss'],
})
export class WPropertyProjectCardComponent {
  @Input() details!: any;

  public isVisible = false;

  public responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  showGallery() {
    this.isVisible = true;
  }
}
