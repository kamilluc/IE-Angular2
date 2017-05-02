import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string;
  surname: string;

  variable = '';

  onClickMe() {
    this.variable = 'Brawo! ' + this.name + ' ' + this.surname;
  }

  constructor() { }

  ngOnInit() {
  }

}
