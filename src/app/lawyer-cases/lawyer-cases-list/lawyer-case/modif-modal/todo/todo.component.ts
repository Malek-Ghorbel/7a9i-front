import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() items! : string[] ;
  public newTask!:string;

  public addToList() {
        if (this.newTask == '') {
        }
        else {
            this.items.push(this.newTask);
            this.newTask = '';
        }
    }

  public deleteTask(index:any) {
        this.items.splice(index, 1);
    }
  ngOnInit(): void {
  }

}
