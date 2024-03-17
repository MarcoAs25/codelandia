import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from '../navigation/navigation.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, NavigationComponent]
})
export class HeaderComponent {
  @Output() onToggle = new EventEmitter();
  toggleMenu() {
    this.onToggle.emit();
  }
}
