import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-post-page-component',
  templateUrl: './new-post-page.component.html',
  styleUrls: ['./new-post-page.component.css']
})
export class NewPostPageComponent {
  /**
   * Default post selection
   */
  selectedPostType = 'recipe'

  /**
   * Default post body
   */
  postBody = '';

  /**
   * Default post images
   */
  images = [];

  /**
   * View state variable object
   */
  viewState = {
    isLoading: false,
  };

  /**
   * Injecting dependencies
   *
   * @param route
   */
  constructor(private router: Router) {

  }

  /**
   * Handles the main button click event
   * 
   * @returns
   */
  onPostBtn() {
    if (this.postBody.length === 0) {
      // TODO display error
      return;
    }

    this.viewState.isLoading = true;

    const storageKey = 'posts';

    const postsFromStorage = localStorage.getItem(storageKey);

    let posts = [];

    if (postsFromStorage) {
      posts = JSON.parse(postsFromStorage);
    }
    posts.unshift({
      id: posts.length + 1,
      body: this.postBody,
      type: this.selectedPostType,
      images: this.images,
      userName: 'Bianca Antoci',
      profilePicture: 'https://storage.googleapis.com/yutu_api_content/spJXAu1qZ8qGo8LWb3Hib9Q04VA6XtQZZYUorJeJeVMhd2sVEKQNztcFWT1xpzgVRc0i9kKaiSLbN1Z3YKswDL7HsViKbwB1L3sxthaGTmbcq8CgDgYGWlobNbi9voFk.jpeg',
    });
    localStorage.setItem(storageKey, JSON.stringify(posts));
    this.router.navigate(['/home']);
  }

  onFilePick(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.images.unshift(event.target.result);
      }

      reader.readAsDataURL(event.target.files[0]);
    }

    console.log(this.images);
  }
}
