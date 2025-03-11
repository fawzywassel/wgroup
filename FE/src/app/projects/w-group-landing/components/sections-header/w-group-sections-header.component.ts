import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w-group-sections-header',
  templateUrl: './w-group-sections-header.component.html',
  styleUrls: ['./w-group-sections-header.component.scss']
})
export class WGroupSectionsHeaderComponent {
  @Input() image!: string
  @Input() title!: string
  @Input() subtitle!: string
}
