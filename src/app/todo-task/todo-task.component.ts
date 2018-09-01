import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  taskList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.taskList = tasks;
    });
  }

  ngOnInit() {
  }


  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }

  getColor(): string {
    return this.taskList.length >= 5 ? 'red' : 'green';
  }

}
