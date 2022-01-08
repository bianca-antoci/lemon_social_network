import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { get, getDatabase, ref, set } from 'firebase/database';
import { User } from 'firebase/auth';

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

    // subscribe to fire auth
    setTimeout(() => {
      this.angularFireAuth.authState.subscribe((user) => {
        this.firebaseAuthChangeListener(user);
      });
    }, 1000);
  }

  private firebaseAuthChangeListener(response: User) {
    // if needed, do a redirect in here
    if (response) {
      this.storeUserAndRedirect(response);
    } else {
      this.router.navigate(['/welcome']);
    }
  }

  async storeUserAndRedirect(user: User) {
    const reff = get(ref(getDatabase(), 'users/' + user.uid));
    reff.then(value => {
      const userVal = value.val();
      if (userVal === null) {
        set(ref(getDatabase(), 'users/' + user.uid), {
          name: user.displayName,
          email: user.email,
          created: new Date(),
          avatar: user.photoURL
        }).then((_) => {
          localStorage.setItem('_user', JSON.stringify({
            id: user.uid,
            name: user.email,
            avatar: user.photoURL,
          }));
          this.router.navigate(['/home']);
        })

      } else {
        localStorage.setItem('_user', JSON.stringify({
          id: user.uid,
          name: userVal.name,
          avatar: userVal.avatar,
        }));
        this.router.navigate(['/home']);
      }
    });
  }
}
