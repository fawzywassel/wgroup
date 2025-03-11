import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WPropertyNavbarComponent } from './navbar/w-property-navbar.component';
import { WPropertyHeaderComponent } from './header/w-property-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WPropertySectionsHeaderComponent } from './sections-header/w-property-sections-header.component';
import { WPropertyRequestFormComponent } from './request-form/w-property-request-form.component';
import { WPropertyVideoComponent } from './video/w-property-video.component';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { WPropertyFeedbackCardComponent } from './feedback-card/w-property-feedback-card.component';
import { WPropertyProjectCardComponent } from './project-card/w-property-project-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { WPropertyAboutUsSectionComponent } from './about-us-section/w-property-about-us-section.component';

const COMPONENTS = [
  WPropertyNavbarComponent,
  WPropertyHeaderComponent,
  WPropertySectionsHeaderComponent,
  WPropertyRequestFormComponent,
  WPropertyVideoComponent,
  WPropertyFeedbackCardComponent,
  WPropertyProjectCardComponent,
  WPropertyAboutUsSectionComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    DialogModule,
    RatingModule,
    ImageModule,
    ToastModule,
    ChartModule,
    GalleriaModule,
    HttpClientModule,
    GlobalSharedModule,
  ],
  exports: [...COMPONENTS],
})
export class WPropertySharedModule {}
