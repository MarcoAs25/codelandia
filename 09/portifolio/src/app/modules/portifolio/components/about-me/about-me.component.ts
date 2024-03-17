import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone: true,
  imports:[MatButtonModule]
})
export class AboutMeComponent {
  constructor(){}

  calcAge(date: string) {
    var today = new Date();
    var birthdate = new Date(date);
    var age = today.getFullYear() - birthdate.getFullYear();
    var month = today.getMonth() - birthdate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }

    return age;
  }

}
