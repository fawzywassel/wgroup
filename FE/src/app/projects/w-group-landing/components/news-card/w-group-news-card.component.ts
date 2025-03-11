import { Component, Input } from '@angular/core';
import { IWGroupNews } from '../../interfaces/news.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-w-group-news-card',
  templateUrl: './w-group-news-card.component.html',
  styleUrls: ['./w-group-news-card.component.scss']
})

export class WGroupNewsCardComponent {
  @Input() newsDetails!: IWGroupNews

  visible: boolean = false;

  constructor(private sanitizer: DomSanitizer) { }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  url(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
