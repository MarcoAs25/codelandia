import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ExperienceInfo } from '../../interface/experience-info.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports:[MatCardModule, CommonModule]
})
export class ExperienceComponent {
  @Input() experiences!: ExperienceInfo[];
}
