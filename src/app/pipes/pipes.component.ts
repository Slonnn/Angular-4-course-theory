import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent implements OnInit {

  name = "My_Pipe";
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'oof',
    baz: 'zab',
    nested: {
      xyz: 3,
      number: [1, 2, 3]
    }
  }
  //создание пайпа
  num = 2;
  constructor() { }

  ngOnInit() {
  }

}
