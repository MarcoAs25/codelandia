import { MatCardModule } from '@angular/material/card';
import { Component, Input } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss'],
  standalone: true,
  imports:[MatCardModule, MatTooltipModule]
})
export class TechnologyCardComponent {
@Input() imageUrl!: string;
@Input() tooltip!: string;
}
