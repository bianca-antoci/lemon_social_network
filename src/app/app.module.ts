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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material design imports
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
