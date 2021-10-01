import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
