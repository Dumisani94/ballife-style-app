import { Component, OnInit, OnDestroy, Inject, forwardRef } from '@angular/core';
import { UserService } from '../data/user.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../data/notification.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  months = [
    { id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
    { id: 4, name: 'April' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'July' },
    { id: 8, name: 'August' },
    { id: 9, name: 'Septmber' },
    { id: 10, name: 'October' },
    { id: 11, name: 'November' },
    { id: 12, name: 'December' },
  ];


  tasks = [];
  info: any = {};
  isOverSpent = false;
  completedTasks: any = [];
  upComingTasks: any = [];
  notifications: any = [];
  tasksByTaskType: any = [];
  selectedTask = {};
  monthlyBudget = 0;
  selectTaskType = '';
  source = interval(10000);
  subscription: Subscription;
  motivation: any = {};
  isLoaded = false;


  constructor(@Inject(forwardRef(() => UserService)) public userService: UserService, @Inject(forwardRef(() => NotificationService)) public notificationService: NotificationService) {
  }


  ngOnInit() {
    localStorage.clear;
    this.tasks = this.userService.getTasks();
    this.userService.getDashboardInfo().subscribe(data => {
      this.info = data;

      if (this.info.overSpent > 0) {
        this.isOverSpent = true;
      }

      this.isLoaded = true;
      localStorage.setItem('balance', this.info.balance);
    });

    this.userService.getCompletedTasks().subscribe(data => {
      this.completedTasks = data;
      console.log(this.completedTasks);

    });

    this.userService.getUpcomingTasks().subscribe(data => {
      this.upComingTasks = data;
    });

    this.notificationService.getAllNotifications().subscribe(data => {
      this.notifications = data;
    });

    this.getMonthlyBudget();

    this.getDailyMotivation();
  }

  navigateToSelectedTasks(selectTaskType) {
    this.userService.getTaskByTaskType(selectTaskType).subscribe(data => {
      this.selectTaskType = selectTaskType;

      localStorage.setItem('taskType', selectTaskType);
      localStorage.setItem('selectedTasks', JSON.stringify(data));

      console.log(data);
    });

  }

  editTask(task) {
    this.selectedTask = task;
    localStorage.setItem('selectedTask', JSON.stringify(task));
  }

  getMonthlyBudget() {
    this.userService.getMonthlyBudget().subscribe(data => {
      this.monthlyBudget = data;
      console.log('Monthly Budget')
      console.log(this.monthlyBudget)
    });
  }

  getDailyMotivation() {
    this.notificationService.getDailyMotivation().subscribe(data => {
      this.motivation = data;
      console.log(this.motivation)
    });
  }

  selectedMonth(event: any) {
    console.log('Get Selected Month.');
    console.log(event.target.value);

    localStorage.clear;
    this.tasks = this.userService.getTasks();
    this.userService.getDashboardInfo().subscribe(data => {
      this.info = data;

      if (this.info.overSpent > 0) {
        this.isOverSpent = true;
      }

      this.isLoaded = true;
      localStorage.setItem('balance', this.info.balance);
    });

    this.userService.getCompletedTasks().subscribe(data => {
      this.completedTasks = data;
      console.log(this.completedTasks);

    });

    this.userService.getUpcomingTasks().subscribe(data => {
      this.upComingTasks = data;
    });

    this.notificationService.getAllNotifications().subscribe(data => {
      this.notifications = data;
    });

    this.getMonthlyBudget();

    this.getDailyMotivation();

  }

}
