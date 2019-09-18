import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTaskComponent } from './new-task/new-task.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DailyTaskComponent } from './daily-task/daily-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { FinanceComponent } from './finance/finance.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { UserService } from './data/user.service';
import { NotificationService } from './data/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewTaskComponent,
    HeaderComponent,
    DailyTaskComponent,
    ViewTaskComponent,
    FinanceComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule
   ],
  providers: [DatePipe, UserService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
