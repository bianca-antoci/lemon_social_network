import { Component, Input, OnInit } from "@angular/core";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";

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

  /**
   * The current user
   */
  currentUser = JSON.parse(localStorage.getItem('_user'));

  ngOnInit(): void {
    // we need to load the posts by type
    const db = getDatabase();
    const starCountRef = ref(db, 'posts');

    onValue(starCountRef, (snapshot: DataSnapshot) => {
      this.feedPosts = [];
      snapshot.forEach(element => {
        const post = element.val()
        post.id = element.key;
        if (post.approved) {
          this.feedPosts.push(post);
        }
      });
      this.feedPosts = this.feedPosts.sort((a, b) => b.id - a.id);
      this.feedPosts = this.feedPosts.filter(item => this.type === 'home' || item.type === this.type);

      // set the state to not loading
      this.viewState.isLoading = false;
    });


  }
}
