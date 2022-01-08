import { Component, OnDestroy } from "@angular/core";
import { FirebaseuiAngularLibraryService } from "firebaseui-angular";
import { getAuth, signOut, User } from "firebase/auth";
import * as firebaseui from "firebaseui";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login-page-component',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
  })
  export class LoginPageComponent {

    constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
      const auth = getAuth();
      signOut(auth);
      // this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener);
  }

  // private firebaseAuthChangeListener(response: User) {
  //   if (response && this.router) {
  //     this.router.navigate(['/home']);
  //   }
  // }
}
  