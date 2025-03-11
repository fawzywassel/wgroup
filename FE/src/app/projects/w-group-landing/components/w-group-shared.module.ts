import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WGroupNavbarComponent } from './navbar/w-group-navbar.component';
import { WGroupHeaderComponent } from './header/w-group-header.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WGroupSectionsHeaderComponent } from './sections-header/w-group-sections-header.component';
import { DialogModule } from 'primeng/dialog';
import { WGroupNewsCardComponent } from './news-card/w-group-news-card.component';
import { WGroupBrandComponent } from './brand/w-group-brand.component';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';


const COMPONENTS = [
    WGroupNavbarComponent,
    WGroupHeaderComponent,
    WGroupSectionsHeaderComponent,
    WGroupNewsCardComponent,
    WGroupBrandComponent,
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GalleriaModule,
        DialogModule,
        GlobalSharedModule,
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class WGroupSharedModule { }
