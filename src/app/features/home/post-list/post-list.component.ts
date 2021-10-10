import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-home-post-list-component',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
  })
  export class PostListComponent {
    /**
     * The type of posts to query
     */
    @Input()
    type = 'none'

    /**
     * The page title to be displayed
     */
    @Input()
    title = 'none'

    /**
     * Sample posts, to be removed once connected to the server
     */
    posts = [
      {
        id: 1,
        media: 'https://google.com',
        userName: 'John Smith',
      },
      {
        id: 2,
        media: 'https://google.com',
        userName: 'Maria Smith',
      },
      {
        id: 3,
        media: 'https://google.com',
        userName: 'Mario Smith',
      }
    ];
  }
  