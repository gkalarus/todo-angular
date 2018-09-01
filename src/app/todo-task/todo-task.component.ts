import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  taskList: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.taskList = tasks;
    });
  }

  ngOnInit() {
  }


  remove(task: string) {
    this.tasksService.remove(task);
  }

  done(task: string) {
    this.tasksService.done(task);
  }

  getColor(): string {
    return this.taskList.length >= 5 ? 'red' : 'green';
  }

}
