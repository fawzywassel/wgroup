import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WArchitectNavbarComponent } from './navbar/w-architect-navbar.component';
import { WArchitectHeaderComponent } from './header/w-architect-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WArchitectSectionsHeaderComponent } from './sections-header/w-architect-sections-header.component';
import { GlobalSharedModule } from 'src/app/shared/global-shared.module';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { SidebarModule } from 'primeng/sidebar';
import { WArchitectProjectCardComponent } from './project-card/w-architect-project-card.component';


const COMPONENTS = [
    WArchitectNavbarComponent,
    WArchitectHeaderComponent,
    WArchitectSectionsHeaderComponent,
    WArchitectProjectCardComponent,
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DialogModule,
        ImageModule,
        SidebarModule,
        GlobalSharedModule,
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class WArchitectSharedModule { }
