import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './directives/numbers-only.directive';
import { YoutubeVideoDialogComponent } from './components/youtube-video-dialog/youtube-video-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  NumberDirective,
  YoutubeVideoDialogComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DialogModule],
  exports: [...COMPONENTS],
})
export class GlobalSharedModule {}
