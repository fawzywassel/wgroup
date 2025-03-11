import { Component } from '@angular/core';
import { WGroupJobsList } from '../../constants/jobs.constant';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-group-hiring',
  templateUrl: './w-group-hiring.component.html',
  styleUrls: ['./w-group-hiring.component.scss'],
})
export class WGroupHiringComponent {
  image = IMAGES.pagesHeaders.wGroup.hiring;
  title = 'التوظيف';
  subtitle = 'إنضم إلي مجموعة W الآن';
  selectedJob!: any;
  jobs = WGroupJobsList;

  showDetails(details: any) {
    this.selectedJob = details;
  }

  applyForJob() {
    const link = 'hr@wgroupksa.com';
    window.open(`mailto: ${link}`, '_blank');
  }
}
