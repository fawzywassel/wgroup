import { Component } from '@angular/core';
import { WArchitectProjectsList } from '../../constants/projects.constant';
import { ActivatedRoute } from '@angular/router';
import { IWArchitectProject } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-w-architect-project-details',
  templateUrl: './w-architect-project-details.component.html',
  styleUrls: ['./w-architect-project-details.component.scss'],
})
export class WArchitectProjectDetailsComponent {
  projects: IWArchitectProject[] = WArchitectProjectsList;
  projectDetails!: IWArchitectProject;

  activeImage = '';
  isImageDialogVisible = false;
  isVideoDialogVisible = false;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const selectedProject = WArchitectProjectsList?.find((item: any) => {
      return item.id === this.id;
    });
    if (selectedProject) {
      this.projectDetails = selectedProject;
    }
  }

  get id() {
    return this.activeRoute.snapshot.params?.['id'] || '';
  }

  openImageDialog(src: string) {
    this.activeImage = src;
    this.isImageDialogVisible = true;
  }

  openVideoDialog() {
    this.isVideoDialogVisible = true;
  }

  hideVideoDialog() {
    this.isVideoDialogVisible = false;
  }
}
