import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
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
  motivation : any = {};
  isLoaded = false;


  constructor(private userService: UserService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    localStorage.clear;


    this.tasks = this.userService.getTasks();
    this.userService.getDashboardInfo().subscribe(data => {
      this.info = data;

      if (this.info.overSpent > 0) {
        this.isOverSpent = true;
      }

      console.log(data);
      this.isLoaded = true;

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

}
