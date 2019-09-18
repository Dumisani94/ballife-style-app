import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { UserService } from '../data/user.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../data/notification.service';

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.css']
})
export class DailyTaskComponent implements OnInit {

  dailTasks: any = [];
  currentDate = new Date();
  formatedDate;


  constructor(@Inject(forwardRef(() => UserService)) public userService: UserService, @Inject(forwardRef(() => NotificationService)) public notificationService: NotificationService) {
  }
  ngOnInit() {

    this.userService.getDailyTasks().subscribe(data => {
      this.dailTasks = data;
      console.log(this.dailTasks);

    });

  }

}
