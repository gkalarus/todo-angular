import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  taskList: Array<string> = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  remove(task: string) {
    this.emitRemove.emit(task);
  }

  done(task: string) {
    this.emitDone.emit(task);
  }

  getColor(): string {
    return this.taskList.length >= 5 ? 'red' : 'green';
  }

}
