import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../data/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  taskDetails: FormGroup;
  taskType = '';
  taskStatus = '';
  isAdded = false;

  constructor(private formBuilder: FormBuilder, private taskService : UserService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.taskDetails = this.formBuilder.group({
      taskName: new FormControl('', Validators.required),
      taskDesciption: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      taskType: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      taskStatus :new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime :new FormControl('', Validators.required)
    });
  }

  saveTask() {

    // let formatedStarTime = this.datePipe.transform(this.currentDate, 'HH:mm:ss');


    let task = {
      'name': this.taskDetails.value.taskName,
      'description': this.taskDetails.value.taskDesciption,
      'startDate': this.taskDetails.value.startDate,
      'endDate': this.taskDetails.value.endDate,
      'taskStatus': this.taskStatus,
      'amount': this.taskDetails.value.cost,
      'type': this.taskType,
      'timeCreated' : new Date(),
      'startTime': this.taskDetails.value.startTime,
      'endTime': this.taskDetails.value.endTime
      
    }

    this.taskService.saveTask(task).subscribe(data => {
      this.isAdded = true;
    });

  }

}
