import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None //глобально видны все стили
})
export class CarsComponent {

  carsYears: [{name: string, year: number}] = [{
      name: 'Ford',
      year: 2000
    }
  ]
  addCarStatus = false;
  cars = ['Ford', 'Audi-100', 'BMW', 'LADA', 'Bently', 'Mazda'];
  inputText = '';

  constructor(){

  }

  updateCarList(car: {name: string, year: number}){
    this.carsYears.push(car)
  }

  addText(event: Event){
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  setBigCarText(car: string){
    return car.length > 4 ? true : false; 
  }
}
