import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  // carName = 'FORD';
  // carYear = 2015;
  @Input() carItem: {name: string, year: number};

}
