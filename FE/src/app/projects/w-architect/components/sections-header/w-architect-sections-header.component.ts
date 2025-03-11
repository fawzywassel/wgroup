import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w-architect-sections-header',
  templateUrl: './w-architect-sections-header.component.html',
  styleUrls: ['./w-architect-sections-header.component.scss']
})
export class WArchitectSectionsHeaderComponent {
  @Input() image!: string
  @Input() title!: string
  @Input() subtitle!: string
}
