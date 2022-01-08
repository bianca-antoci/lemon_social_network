import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

    // fetch the logged in user
    const user = localStorage.getItem('_user')
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  /**
   * Handles the click event on the button navigation
   */
  onItemClick(type: string) {
    switch (type) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'recipies':
        this.router.navigate(['/recipes']);
        break;
      case 'diets':
        this.router.navigate(['/diets']);
        break;
      case 'products':
        this.router.navigate(['/products']);
        break;
      case 'profile':
        this.router.navigate(['/profile']);
        break;
      case 'add':
        this.router.navigate(['/new-post']);
        break;

    }
  }

}
