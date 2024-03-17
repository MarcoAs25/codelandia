import { ImageInfo } from './../../interface/image-info.interface';
import { Component, Input } from '@angular/core';
import { TechnologyCardComponent } from './technology-card/technology-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  standalone: true,
  imports:[TechnologyCardComponent, CommonModule]
})
export class TechnologyComponent {
  @Input() images!: ImageInfo[];
}
