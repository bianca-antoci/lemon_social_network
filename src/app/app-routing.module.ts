import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';

const routes: Routes = [
  /**
   * The internal routing.
   * It requires the user to be logged in.
   */
  { path: 'home', component: HomePageComponent },
  { path: 'recipies', component: HomePageComponent },
  { path: 'diets', component: HomePageComponent },
  { path: 'products', component: HomePageComponent },
  { path: 'profile', component: HomePageComponent },
  { path: 'notifications', component: HomePageComponent },
  { path: 'new-post', component: HomePageComponent },

  /**
   * The external routing.
   * It doesn't require a session.
   */
  { path: 'welcome', component: HomePageComponent },
  { path: 'welcome/register', component: HomePageComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
