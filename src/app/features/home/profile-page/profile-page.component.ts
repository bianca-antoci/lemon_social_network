import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DataSnapshot, getDatabase, onValue, ref, update } from "firebase/database";
import { getStorage, uploadBytes } from "firebase/storage";
import { ref as StorageRef } from "firebase/storage";
import { EditNameComponent } from "./edit-name/edit-name.component";

@Component({
  selector: 'app-profile-page-component',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  /**
   * Local user.
   */
  currentUser = JSON.parse(localStorage.getItem('_user'));

  /**
   * My posts from Firebase.
   */
  myPosts = [];

  /**
   * Local storage ref.
   */
  storage = getStorage();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const db = getDatabase();
    const dbRef = ref(db, 'posts');

    onValue(dbRef, (snapshot: DataSnapshot) => {
      this.myPosts = [];
      snapshot.forEach(element => {
        const post = element.val()
        post.id = element.key;
        if (post.createdBy === this.currentUser.id) {
          this.myPosts.push(post);
        }
      });
      this.myPosts = this.myPosts.sort((a, b) => b.id - a.id);
    });
  }

  onFieldBlur() {
    update(ref(getDatabase(), 'users/' + this.currentUser.id), {
      about: this.currentUser.about,
      avatar: this.currentUser.avatar,
      name: this.currentUser.name,
    }).then(() => {
      this.updateUserLocally();
    });
  }

  onFilePick(event: any) {
      if (event.target.files && event.target.files[0]) {
      this.uploadFile(event.target.files[0]).then(id => {
        const url = `https://firebasestorage.googleapis.com/v0/b/lemon-social-network.appspot.com/o/${id}?alt=media`;
        this.currentUser.avatar = url;
        this.onFieldBlur();
      });
    }
  }

  openNameDialog(): void {
    const dialogRef = this.dialog.open(EditNameComponent, {
      width: '250px',
      data: {name: this.currentUser.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.currentUser.name = result;
        this.onFieldBlur();
      }
    });
  }
  
  private updateUserLocally() {
    localStorage.setItem('_user', JSON.stringify(this.currentUser));
  }

  private async uploadFile(file: any) {
    const id = 'post_' + new Date().getTime();
    const storageRef = StorageRef(this.storage, id);
    var newMetadata = {
      cacheControl: 'public,max-age=4000',
    }
    await uploadBytes(storageRef, file, newMetadata)
    return id;
  }
}
