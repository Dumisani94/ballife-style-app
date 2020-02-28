import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../data/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  budgetDetails: FormGroup;
  isAdded = false;

  constructor(@Inject(forwardRef(() => FormBuilder)) public formBuilder, @Inject(forwardRef(() => UserService)) public taskService: UserService, @Inject(forwardRef(() => DatePipe)) public datePipe: DatePipe) {}

  ngOnInit() {
    this.budgetDetails = this.formBuilder.group({
      budget: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
  }


  addBudget(){

    let budget = {
      'budget': this.budgetDetails.value.budget,
      'startDate': this.datePipe.transform(this.budgetDetails.value.startDate, 'yyyy-MM-dd'),
      'endDate': this.datePipe.transform(this.budgetDetails.value.endDate,'yyyy-MM-dd'),
      'overSpent':0
      
    }

    console.log(budget);

    this.taskService.addBudget(budget).subscribe(data => {
      this.isAdded = true;
      console.log(budget);

    });
  }

}
