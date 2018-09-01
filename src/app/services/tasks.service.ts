import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TasksService {

  private taskList: Array<string> = [];
  private taskDone: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>(this.taskList);
  private taskDoneObs = new BehaviorSubject<Array<string>>(this.taskDone);

  constructor() {
    this.taskList = ['Sprzątanie', 'Nauka Angulara', 'Podlewanie kwiatów', 'Zakupy'];
    this.taskListObs.next(this.taskList);
  }

  add(task: string) {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList)
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(item => item !== task);
    this.taskListObs.next(this.taskList);
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.taskDone);
  }

  getTasksListObs(): Observable<Array<string>> {
    return this.taskListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<string>> {
    return this.taskDoneObs.asObservable();
  }
}
