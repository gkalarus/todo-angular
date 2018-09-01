import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task";

@Injectable()
export class TasksService {

  private taskList: Array<Task> = [];
  private taskDone: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.taskList = [
      {name: 'Sprzątanie', created: new Date()},
      {name: 'Nauka Angulara', created: new Date()},
      {name: 'Podlewanie kwiatów', created: new Date()},
      {name: 'Zakupy', created: new Date()}
    ];
    this.taskListObs.next(this.taskList);
  }

  add(task: Task) {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList)
  }

  remove(task: Task) {
    this.taskList = this.taskList.filter(item => item !== task);
    this.taskListObs.next(this.taskList);
  }

  done(task: Task) {
    this.taskDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.taskDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }
}
