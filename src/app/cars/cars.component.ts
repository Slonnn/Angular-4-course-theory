import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
 
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi-100', 'BMW', 'LADA', 'Bently', 'Mazda'];
  dates = [
    new Date(2015, 3, 4),
    new Date(2005, 5, 8),
    new Date(2009, 10, 2),
    new Date(2056, 5, 7)
  ];

  inputText = 'Default text';

  constructor(){

  }

  addCar(){
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  addText(event: Event){
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  setBigCarText(car: string){
    return car.length > 4 ? true : false; 
  }
}
