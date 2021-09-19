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
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
