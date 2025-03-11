import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w-property-sections-header',
  templateUrl: './w-property-sections-header.component.html',
  styleUrls: ['./w-property-sections-header.component.scss']
})
export class WPropertySectionsHeaderComponent {
  @Input() image!: string
  @Input() title!: string
  @Input() subtitle!: string
}
