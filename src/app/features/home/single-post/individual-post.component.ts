import { Component, Input, OnInit } from "@angular/core";
import { getDatabase, ref, set, update } from "firebase/database";

@Component({
  selector: 'app-individual-post-component',
  templateUrl: './individual-post.component.html',
  styleUrls: ['./individual-post.component.css']
})
export class IndividualPostComponent implements OnInit {

  @Input()
  post: any;

  @Input()
  currentUser: any;

  ngOnInit(): void {
    this.post.isLikedByMe = false;
    if (this.post.likedBy) {
      this.post.isLikedByMe = this.post.likedBy.some(e => e === this.currentUser.id);
    }
  }

  onClickBtn() {

    let count = this.post.likeCount;
    let likedBy = this.post.likedBy;

    if (!(likedBy && likedBy.length > 0)) {
      likedBy = [];
    }
    const likedByMe = likedBy.some(e => e === this.currentUser.id);

    if (likedByMe) {
      count--;
      likedBy = likedBy.filter(e => e !== this.currentUser.id)
    } else {
      count++;
      likedBy.push(this.currentUser.id);
      if (this.post.createdBy !== this.currentUser.id) {
        set(ref(getDatabase(), 'notifications/' + new Date().getTime()), {
          user: this.post.createdBy,
          created: new Date().getTime(),
          avatar: this.currentUser.avatar,
          message: this.currentUser.name + ' likes your post',
        });
      }
    }

    update(ref(getDatabase(), 'posts/' + this.post.id), {
      likeCount: count,
      likedBy: likedBy,
    });
  }
}
