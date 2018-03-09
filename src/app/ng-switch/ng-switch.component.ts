import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {


  items = [1, 2, 3, 4, 5];

  current = 1;

  constructor() { }

  ngOnInit() {
  }

  onClick(number: number){
    this.current = number;
  }

}
