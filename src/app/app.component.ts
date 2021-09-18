import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  
  constructor(private router: Router) {
    // we listen for route changes to detect if user still logged in
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
       this.isLoggedIn = val.url.indexOf('welcome') === -1;
      }
  });
  }
}
