import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w-group-brand',
  templateUrl: './w-group-brand.component.html',
  styleUrls: ['./w-group-brand.component.scss'],
})
export class WGroupBrandComponent {
  @Input() details!: {
    link: string;
    bg: string;
    logo: string;
    alignEnd: boolean;
    addDarkLayer: boolean;
    disabled?: boolean;
    label?: string;
  };

  constructor(private route: Router) {}

  public routeToPage() {
    this.route.navigateByUrl(this.details.link);
  }
}
