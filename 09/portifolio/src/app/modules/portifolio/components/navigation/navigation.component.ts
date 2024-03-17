import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [MatListModule, CommonModule]
})
export class NavigationComponent {
  @Input() column_mode: boolean = false;
  @Output() onClickItem = new EventEmitter();

  onClick(){
    this.onClickItem.emit();
  }
}
