import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video-dialog',
  templateUrl: './youtube-video-dialog.component.html',
  styleUrls: ['./youtube-video-dialog.component.scss']
})

export class YoutubeVideoDialogComponent {
  @Input() url!: string
  @Input() title!: string
  @Input() visible!: boolean;
  @Output() onHideDialog: EventEmitter<any> = new EventEmitter<any>();

  safeURL!: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }

  onHideDialogFn() {
    this.onHideDialog.emit(this.visible);
  }
}
