import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  private currentDate = new Date();
  private formatedDate;


  constructor(private datePipe: DatePipe) {

  }

  ngOnInit() {

  }
}
