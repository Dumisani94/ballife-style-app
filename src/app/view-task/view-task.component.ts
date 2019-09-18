import { Component, OnInit } from '@angular/core';
import { UserService } from '../data/user.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private service: UserService) { }
  taskType = '';
  selectedTasks: any = [];
  tasks: any = [];
  selectedTask: any = {};


  ngOnInit() {

    this.taskType = localStorage.getItem('taskType');
    this.selectedTasks = localStorage.getItem('selectedTasks');

    this.tasks = JSON.parse(this.selectedTasks);
    console.log(this.tasks);
    localStorage.clear;
  }

  editTask(task) {
    this.selectedTask = task;
    console.log(task);
    localStorage.setItem('selectedTask', JSON.stringify(task));
  }

  deleteTask(id) {
    this.service.deleteTask(id).subscribe(data => {
      console.log('Selected: '  + id);
      localStorage.clear;
    });
  }


}
