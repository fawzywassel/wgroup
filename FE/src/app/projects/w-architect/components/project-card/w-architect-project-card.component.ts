import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';
import { IWArchitectProject } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-w-architect-project-card',
  templateUrl: './w-architect-project-card.component.html',
  styleUrls: ['./w-architect-project-card.component.scss']
})

export class WArchitectProjectCardComponent {
  @Input() project!: IWArchitectProject

  visible = false;

  constructor(private router: Router) { }

  navigateToProject(id: string) {
    this.router.navigateByUrl(`${W_ROUTES.W_ARCHITECT}/${W_ROUTES.DETAILS}/${id}`)
  }
}
