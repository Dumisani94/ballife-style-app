import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { HomeComponent } from './home/home.component';
import { DailyTaskComponent } from './daily-task/daily-task.component';
import { FinanceComponent } from './finance/finance.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NotificationsComponent } from './notifications/notifications.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'view-notifications', component: NotificationsComponent },
  { path: 'daily', component: DailyTaskComponent },
  { path: 'daily-tasks', component: DailyTaskComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'view-tasks', component: ViewTaskComponent },
  { path: 'edit-task', component: EditTaskComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
