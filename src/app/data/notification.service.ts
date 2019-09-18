import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // private baseURL = 'https://social-auth-api-v1.herokuapp.com/auth';
  private baseURL = 'https://better-life-backend.herokuapp.com/api';


  constructor(private httpClient: HttpClient) { }

  getAllNotifications() {
    return this.httpClient.get<any>(this.baseURL + '/notifications');
  }

  getDailyMotivation() {
    return this.httpClient.get<any>(this.baseURL + '/motivation/generate-motivation');

  }
}
