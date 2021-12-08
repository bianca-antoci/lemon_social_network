import { Component } from "@angular/core";

@Component({
    selector: 'app-profile-page-component',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
  })
  export class ProfilePageComponent {
    user = {
      name: 'Antoci Bianca',
      about: 'Hi! I\'m Bianca',
      favoriteProducts: '',
    }
  }
  