import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietsPageComponent } from './features/home/diets-page/diets-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { NewPostPageComponent } from './features/home/new-post-page/new-post-page.component';
import { NotificationsPageComponent } from './features/home/notifications-page/notificatons-page.component';
import { ProductsPageComponent } from './features/home/products-page/products-page.component';
import { ProfilePageComponent } from './features/home/profile-page/profile-page.component';
import { RecipesPageComponent } from './features/home/recipes-page/recipes-page.component';
import { LoginPageComponent } from './features/welcome/login-page/login-page.component';
import { RegistrationPageComponent } from './features/welcome/registration-page/registration-page.component';
import { SignInEmailComponent } from './features/welcome/sign-in-with-email/signin-email-page.component';

const routes: Routes = [
  /**
   * The internal routing.
   * It requires the user to be logged in.
   */
  { path: 'home', component: HomePageComponent },
  { path: 'recipes', component: RecipesPageComponent },
  { path: 'diets', component: DietsPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'notifications', component: NotificationsPageComponent },
  { path: 'create', component: NewPostPageComponent },

  /**
   * The external routing.
   * It doesn't require a session.
   */
  { path: 'welcome', component: LoginPageComponent},
  { path: 'welcome/register', component: RegistrationPageComponent },
  { path: 'welcome/email', component: SignInEmailComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
