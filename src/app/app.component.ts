import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {

    // start firebase
    initializeApp(environment.firebaseConfig);

    // we listen for route changes to detect if user still logged in
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isLoggedIn = val.url.indexOf('welcome') === -1;
      }
    });

    this.angularFireAuth.authState.subscribe((user) => {
      this.firebaseAuthChangeListener(user);
    });
  }

  private firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/welcome']);
    }
  }
}
