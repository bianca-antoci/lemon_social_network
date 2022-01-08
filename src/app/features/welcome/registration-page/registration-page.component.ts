import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-registration-page-component',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  userForm: FormGroup;
  newUser = { name: '', email: '', password: '', isAcceptedTerms: false, };
  isLoading = false;

  ngOnInit(): void {
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
}
