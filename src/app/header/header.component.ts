import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../data/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service : NotificationService) { }
  notifications : any = [];

  ngOnInit() {
      this.service.getAllNotifications().subscribe(data => {
        this.notifications = data;
        console.log(this.notifications)
      });
    
  }



}
