import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { get, getDatabase, ref } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-signin-page-component',
  templateUrl: './signin-email-page.component.html',
  styleUrls: ['./signin-email-page.component.css']
})
export class SignInEmailComponent implements OnInit {
  userForm: FormGroup;
  newUser = { name: '', email: '', password: '', isAcceptedTerms: false, };
  isLoading = false;
  fireDB = getDatabase();
  loginError = '';

  ngOnInit(): void {

    // prepare the form group with all fields
    this.userForm = new FormGroup({
      email: new FormControl(this.newUser.email, [
        Validators.required,
        Validators.minLength(2),
        Validators.email,
      ]),
      password: new FormControl(this.newUser.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }

  onLoginBtn() {
    // check to see if valid
    if (!this.userForm.valid) {
      return;
    }

    // make the Firebase call to sign in
    this.isLoading = true;
    this.loginError = '';

    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email.value, this.password.value)
      .then((userCredential) => {
        //
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
