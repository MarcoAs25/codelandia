import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatTooltipModule]
})
export class ProjectsCardComponent {
  @Input() imageUrl!: string;
  @Input() projectName!: string;
  @Input() projectDetails!: string;
  @Input() tooltip!: string;
  @Input() projectUrl!: string
}
