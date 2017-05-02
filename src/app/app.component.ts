import { Component } from '@angular/core';
import {Project} from "./app.project";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  projects: Project[];

  constructor() {
    this.title = 'TEST 123';
    this.projects = [
      new Project(1, 'Symfony', true),
      new Project(2, 'Angular', false),
      new Project(3, 'React', false)
    ];
  }


  onClickMe(id, newName, newStatus) {
    this.projects[id-1].name=newName;
    if(newStatus==true)
      this.projects[id-1].isPassed=true;
    else
      this.projects[id-1].isPassed=false;
  }
}
