import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-directive',
  templateUrl: './new-directive.component.html',
  styleUrls: ['./new-directive.component.css']
})
export class NewDirectiveComponent implements OnInit {

  header = "создани своей директивы";
  textInput = "Передача параметров";
  constructor() { }

  ngOnInit() {
  }

}
