import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-home-post-list-component',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
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
   * Variable to hold the posts in memory
   */
  feedPosts = [];

  /**
   * Variable to hold this view state.
   * E.g. is loading or not
   */
  viewState = {
    isLoading: true,
  }

  ngOnInit(): void {
    // we need to load the posts by type
    // local storage for now
    const postsFromStorage = localStorage.getItem('posts');
    if (postsFromStorage) {
      this.feedPosts = JSON.parse(postsFromStorage).filter(item => this.type === 'home' || item.type === this.type);
    }

    // set the state to not loading
    this.viewState.isLoading = false;
  }
}
