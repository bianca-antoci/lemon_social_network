import { Component, OnInit } from "@angular/core";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";

@Component({
    selector: 'app-notifications-page-component',
    templateUrl: './notifications-page.component.html',
    styleUrls: ['./notifications-page.component.css']
  })
  export class NotificationsPageComponent implements OnInit {
    notifications = [];

    ngOnInit(): void {
      const db = getDatabase();
      const dbRef = ref(db, 'notifications');
      const currentUser = JSON.parse(localStorage.getItem('_user'));

      onValue(dbRef, (snapshot: DataSnapshot) => {
        this.notifications = [];
        snapshot.forEach(element => {
          const notification = element.val();
          if (notification.user === currentUser.id) {
            this.notifications.push(notification);
          }
        });
        this.notifications = this.notifications.sort((a, b) => b.id - a.id);
      });
    }
  
    
  }
  