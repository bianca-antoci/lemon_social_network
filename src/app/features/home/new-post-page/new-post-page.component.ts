import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { getDatabase, ref, set } from "firebase/database";
import { getStorage, uploadBytes } from "firebase/storage";
import { ref as StorageRef } from "firebase/storage";

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
  imageURLs = [];

  /**
   * View state variable object
   */
  viewState = {
    isLoading: false,
  };

  /**
   * Reference to the Firebase
   */
  fireDB = getDatabase();
  storage = getStorage();

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
  async onPostBtn() {
    if (this.postBody.length === 0) {
      // TODO display error
      return;
    }

    this.viewState.isLoading = true;

    let storageString = localStorage.getItem('_user')
    let user: any;
    if (storageString) {
      user = JSON.parse(storageString);
    }

    set(ref(this.fireDB, 'posts/' + new Date().getTime()), {
      body: this.postBody,
      type: this.selectedPostType,
      images: this.imageURLs,
      userName: user.name,
      profilePicture: user.avatar,
      approved: false,
      likeCount: 0,
      likedBy: [],
    });

    this.router.navigate(['/home']);
  }

  onFilePick(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.images.unshift(event.target.result);
      }
      reader.readAsDataURL(event.target.files[0]);
      this.uploadFile(event.target.files[0]).then(id => {
        const url = `https://firebasestorage.googleapis.com/v0/b/lemon-social-network.appspot.com/o/${id}?alt=media`;
        this.imageURLs.push(url);
      });
    }
  }

  async uploadFile(file: any) {
    const id = 'post_' + new Date().getTime();
    const storageRef = StorageRef(this.storage, id);
    var newMetadata = {
      cacheControl: 'public,max-age=4000',
    }
    await uploadBytes(storageRef, file, newMetadata)
    return id
  }
}
