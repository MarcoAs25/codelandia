import { Component, Input } from '@angular/core';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { ProjectInfo } from '../../interface/project-info.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ProjectsCardComponent, CommonModule]
})
export class ProjectsComponent {
  @Input() projects!: ProjectInfo[];
}
