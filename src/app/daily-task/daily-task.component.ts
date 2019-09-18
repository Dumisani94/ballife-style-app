import { Component, OnInit } from '@angular/core';
import { UserService } from '../data/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.css']
})
export class DailyTaskComponent implements OnInit {

  dailTasks: any = [];
  currentDate = new Date();
  formatedDate;


  constructor(private userService: UserService, private datePipe: DatePipe) { }

  ngOnInit() {

    this.userService.getDailyTasks().subscribe(data => {
      this.dailTasks = data;
      console.log(this.dailTasks);

    });

    this.formatedDate = this.datePipe.transform(this.currentDate, 'HH:mm:ss');
    console.log(this.formatedDate);
  }

}
