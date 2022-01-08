import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-registration-page-component',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  userForm: FormGroup;
  newUser = { name: '', email: '', password: '', isAcceptedTerms: false, };
  isLoading = false;
  fireDB = getDatabase();
  registerError = '';

  ngOnInit(): void {

    // prepare the form group with all fields
    this.userForm = new FormGroup({
      name: new FormControl(this.newUser.name, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(this.newUser.email, [
        Validators.required,
        Validators.minLength(2),
        Validators.email,
      ]),
      password: new FormControl(this.newUser.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      termsAndPrivacy: new FormControl(this.newUser.isAcceptedTerms, Validators.required,),
    });
  }

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get termsAndPrivacy() { return this.userForm.get('termsAndPrivacy'); }

  onRegisterBtn() {
    // check to see if valid
    if (!this.userForm.valid) {
      return;
    }

    // make the Firebase call to sign in
    this.isLoading = true;
    this.registerError = '';

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email.value, this.password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        // Store the data to our DB now
        set(ref(this.fireDB, 'users/' + user.uid), {
          name: this.name.value,
          email: this.email.value,
          created: new Date(),
          avatar: 'https://firebasestorage.googleapis.com/v0/b/lemon-social-network.appspot.com/o/default-avatar.png?alt=media'
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage === 'EMAIL_EXISTS') {
          this.isLoading = false;
          this.registerError = "This email was already register. Please use a different one.";
        }
      });
  }
}
