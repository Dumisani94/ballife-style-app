import { Injectable, forwardRef, Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseURL = 'https://social-auth-api-v1.herokuapp.com/auth';
  // private baseURL = 'http://localhost:8085/auth';
  // private baseURL = 'https://better-life-backend.herokuapp.com/better_life/api/v1';
  private baseURL = 'http://localhost:8085/api';

  


  constructor(@Inject(forwardRef(() => HttpClient)) public httpClient : HttpClient) {
  }
  getTasks() {
    let data: any;
    this.httpClient.get(this.baseURL + '/tasks').subscribe((res) => {
      data = res;
    });
    return data;
  }

  getDashboardInfo() {
    return this.httpClient.get<any>(this.baseURL + '/dashboard');
  }

  getTaskByTaskType(taskType) {
    return this.httpClient.get<any>(this.baseURL + '/dashboard/' + taskType);
  }


  getCompletedTasks() {
    return this.httpClient.get<any>(this.baseURL + '/tasks/completed-tasks');
  }

  getUpcomingTasks() {
    return this.httpClient.get<any>(this.baseURL + '/tasks/upcoming-tasks');
  }

  getDailyTasks() {
    return this.httpClient.get<any>(this.baseURL + '/tasks/daily-tasks');
  }

  saveTask(task){
    return this.httpClient.post<any>(this.baseURL + '/tasks',task);

  }

  deleteTask(id){
    return this.httpClient.delete<any>(this.baseURL + '/tasks/' + id);

  }

  addBudget(budget){
    return this.httpClient.post<any>(this.baseURL + '/budgets',budget);

  }

  getMonthlyBudget(){
    return this.httpClient.get<any>(this.baseURL + '/budgets/current-budget');

  }

}
