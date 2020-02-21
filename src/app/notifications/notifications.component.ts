import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { UserService } from '../data/user.service';
import { NotificationService } from '../data/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications : any;
  constructor(@Inject(forwardRef(() => UserService)) public userService: UserService, @Inject(forwardRef(() => NotificationService)) public notificationService: NotificationService) {
  }

  ngOnInit() {

    this.notificationService.getAllNotifications().subscribe(data => {
      this.notifications = data;
      console.log(this.notifications);
    });

  }

}
