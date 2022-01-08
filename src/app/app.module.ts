import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { NotificationsPageComponent } from './features/home/notifications-page/notificatons-page.component';
import { DietsPageComponent } from './features/home/diets-page/diets-page.component';
import { NewPostPageComponent } from './features/home/new-post-page/new-post-page.component';
import { ProfilePageComponent } from './features/home/profile-page/profile-page.component';
import { ProductsPageComponent } from './features/home/products-page/products-page.component';
import { RecipesPageComponent } from './features/home/recipes-page/recipes-page.component';
import { RegistrationPageComponent } from './features/welcome/registration-page/registration-page.component';
import { LoginPageComponent } from './features/welcome/login-page/login-page.component';
import { HeaderComponent } from './features/home/header/header.component';
import { FooterComponent } from './features/home/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IndividualPostComponent } from './features/home/single-post/individual-post.component';
import { PostListComponent } from './features/home/post-list/post-list.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as firebaseui from 'firebaseui';
import { firebase, FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DietsPageComponent,
    NewPostPageComponent,
    NotificationsPageComponent,
    ProfilePageComponent,
    ProductsPageComponent,
    RecipesPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    IndividualPostComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,

    // Material design imports
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,

    // Carousel lib, used to flip between content
    IvyCarouselModule,

    // Firebase signin 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
